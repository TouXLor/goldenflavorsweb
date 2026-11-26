import { Clock, MapPin } from "lucide-react";
import {
  isClosed,
  parseLocalDate,
  todayKey,
  type ScheduleItem,
} from "../utils/schedule";

interface ScheduleProps {
  items: ScheduleItem[];
  loading: boolean;
  error: boolean;
  limit?: number;
}

export function Schedule({ items, loading, error, limit = 5 }: ScheduleProps) {
  const key = todayKey();
  const upcoming = items.filter((item) => item.date >= key).slice(0, limit);

  return (
    <div className="schedule">
      <h2 className="spaced">Upcoming Stops</h2>

      {loading && <p className="schedule__message">Loading schedule…</p>}

      {error && (
        <p className="schedule__message">
          We couldn't load the schedule. Follow our socials for the latest
          location!
        </p>
      )}

      {!loading && !error && upcoming.length === 0 && (
        <p className="schedule__message">
          No upcoming stops yet. Check back soon!
        </p>
      )}

      {upcoming.length > 0 && (
        <ul className="schedule__list">
          {upcoming.map((item, index) => {
            const d = parseLocalDate(item.date);
            const closed = isClosed(item);
            const isToday = item.date === key;
            const showAlert = !closed && item.status.toLowerCase() !== "open";

            const classes = [
              "schedule__item",
              closed && "is-closed",
              isToday && "is-today",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <li key={`${item.date}-${index}`} className={classes}>
                <time className="schedule__date" dateTime={item.date}>
                  <span className="schedule__weekday">
                    {d.toLocaleDateString("en-US", { weekday: "short" })}
                  </span>
                  <span className="schedule__day">{d.getDate()}</span>
                  <span className="schedule__month">
                    {d.toLocaleDateString("en-US", { month: "short" })}
                  </span>
                </time>

                <div className="schedule__details">
                  {(isToday || showAlert) && (
                    <div className="schedule__tags">
                      {isToday && <span className="schedule__tag">Today</span>}
                      {showAlert && (
                        <span className="schedule__tag schedule__tag--alert">
                          {item.status}
                        </span>
                      )}
                    </div>
                  )}

                  {closed ? (
                    <p className="schedule__closed">{item.status}</p>
                  ) : (
                    <>
                      <p className="schedule__location">
                        <MapPin size={16} aria-hidden="true" />
                        <span>{item.location || "Location TBA"}</span>
                      </p>
                      <p className="schedule__hours">
                        <Clock size={16} aria-hidden="true" />
                        <span>{item.hours || "Hours TBA"}</span>
                      </p>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
