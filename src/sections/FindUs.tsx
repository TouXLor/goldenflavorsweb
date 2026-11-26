import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { INFO } from "../data/info";
import { getSiteImage } from "../data/images";
import { useSchedule } from "../utils/useSchedule";
import { todayKey, parseLocalDate, isClosed } from "../utils/schedule";
import { Schedule } from "./Schedule";
import LookForTruck from "../assets/look-for-truck.svg?react";

const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export function FindUs() {
  const { schedule, loading, error } = useSchedule();

  // The schedule changes this section's content after the first render,
  // so tell GSAP to re-measure its scroll positions once data arrives.
  useEffect(() => {
    if (!loading) ScrollTrigger.refresh();
  }, [loading]);

  const key = todayKey();
  const dateHeading = parseLocalDate(key).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const todayItem = schedule.find((i) => i.date === key);
  const next = schedule.find((i) => i.date > key && !isClosed(i) && i.location);
  const nextDay = next
    ? parseLocalDate(next.date).toLocaleDateString("en-US", {
        weekday: "short",
      })
    : null;
  const isParked = !loading && !error && (!todayItem || isClosed(todayItem));

  let when = "";
  let where = "";
  let badge: string | null = null;

  if (todayItem && !isClosed(todayItem)) {
    when = todayItem.hours || "Hours TBA";
    where = todayItem.location || "Location TBA";
    if (todayItem.status.toLowerCase() !== "open") badge = todayItem.status;
  }

  const showDirections =
    !!todayItem && !isClosed(todayItem) && !!todayItem.location;

  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = arrowRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGGeometryElement>(".arrow path");

      // Hide each path by making its dash as long as the path itself
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      // Draw them in when the section scrolls into view
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: { trigger: wrap, start: "top 90%", once: true },
      });
    }, wrap);

    return () => ctx.revert(); // cleans up the animation and its ScrollTrigger
  }, []);

  return (
    <section id="find" className="find">
      {/* ---------------- Row 1: Card & Schedule ---------------- */}
      <div className="find__top">
        <h2 className="spaced find__heading">Find Us</h2>
        <div className="find__row">
          <div className="find__card">
            <p className="find__date">{dateHeading}</p>

            {loading && (
              <p className="find__message" aria-live="polite" aria-busy="true">
                Loading schedule…
              </p>
            )}

            {error && (
              <p className="find__message" aria-live="polite">
                We couldn't load today's schedule.
              </p>
            )}

            {isParked && (
              <div className="find__closed" aria-live="polite">
                <p>No Schedule Today!</p>
                {next && nextDay ? (
                  <p className="find__next">
                    <strong>Next up</strong>
                    <ArrowRight size={18} aria-hidden="true" />
                    <span>
                      {nextDay}, {next.hours || "Hours TBA"} at {next.location}
                    </span>
                  </p>
                ) : (
                  <p className="find__next">
                    No upcoming stops are scheduled yet.
                  </p>
                )}
              </div>
            )}

            {!loading && !error && todayItem && !isClosed(todayItem) && (
              <dl aria-live="polite" aria-busy={loading}>
                <div>
                  <dt>When:</dt>
                  <dd>
                    {when}
                    {badge && <span className="find__badge">{badge}</span>}
                  </dd>
                </div>
                <div>
                  <dt>Location:</dt>
                  <dd>{where}</dd>
                </div>
              </dl>
            )}

            {(isParked || error) && (
              <nav
                className="find__socials"
                aria-label="Contact and social links"
              >
                <a
                  className="find__social-link"
                  href={`tel:${INFO.phone.replace(/\D/g, "")}`}
                  aria-label={`Call ${INFO.phone}`}
                >
                  <Phone size={20} aria-hidden="true" />
                </a>
                <a
                  className="find__social-link"
                  href={INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={20} aria-hidden="true" />
                </a>
                <a
                  className="find__social-link"
                  href={`mailto:${INFO.email}`}
                  aria-label={`Email ${INFO.email}`}
                >
                  <Mail size={20} aria-hidden="true" />
                </a>
              </nav>
            )}

            {showDirections && (
              <a
                className="btn btn--navy"
                href={mapsUrl(todayItem!.location)}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions <MapPin size={18} aria-hidden="true" />
              </a>
            )}
          </div>

          <div className="find__right-container find__right-container--schedule">
            <Schedule items={schedule} loading={loading} error={error} />
          </div>
        </div>
      </div>

      {/* ---------------- Row 2: Arrow & Image 2 ---------------- */}
      <div className="find__row">
        <div
          ref={arrowRef}
          className="find__left-container"
        >
          <LookForTruck
            className="arrow"
            role="img"
            aria-label="Look for the truck"
          />
        </div>

        <div className="find__right-container">
          <img
            className="find__img2"
            data-speed="1.12"
            src={getSiteImage("cyan-truck")}
            alt="Food truck on the street"
          />
        </div>
      </div>
    </section>
  );
}
