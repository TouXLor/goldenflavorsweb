import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NAV_LINKS } from "../data/navigation";
import { scrollToId } from "../utils/scroll";
import gfLogo from "../assets/imgs/GF_Logo.png";

gsap.registerPlugin(ScrollTrigger);

const go = (id: string) => (e: MouseEvent) => {
  e.preventDefault();
  scrollToId(id);
};

export const Logo = ({ large = false }: { large?: boolean }) => (
  <span className={large ? "logo logo--lg" : "logo"}>
    <img
      className="logo__mark"
      aria-hidden="true"
      src={gfLogo}
      alt="Golden Flavors Logo"
      width="140" // Replace with your actual logo width aspect ratio
      height="40" // Replace with your actual logo height aspect ratio
      loading="eager"
      fetchPriority="high"
    />
    {large && <span className="logo__word">GOLDEN FLAVORS</span>}
  </span>
);

export function Nav({ isHomePage = true }: { isHomePage?: boolean }) {
  const headerRef = useRef<HTMLElement>(null);
  const hrefFor = (id: string) => (isHomePage ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      const slide = gsap
        .from(header, {
          yPercent: -100,
          duration: 0.35,
          ease: "power2.out",
          paused: true,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          const nearTop = self.scroll() < 80;
          if (self.direction === -1 || nearTop) {
            slide.play();
          } else {
            slide.reverse();
          }
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="nav" ref={headerRef}>
      <a
        href={hrefFor("top")}
        onClick={isHomePage ? go("top") : undefined}
        aria-label="Golden Flavors home"
      >
        <Logo />
      </a>
      <nav aria-label="Primary">
        {NAV_LINKS.map((l) => (
          <a
            key={l.id}
            href={hrefFor(l.id)}
            onClick={isHomePage ? go(l.id) : undefined}
          >
            {l.label}
          </a>
        ))}
        <a
          href={hrefFor("find")}
          onClick={isHomePage ? go("find") : undefined}
          className="nav__cta"
        >
          Find Us
        </a>
      </nav>
    </header>
  );
}
