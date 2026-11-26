export interface ScheduleItem {
  date: string; // "2026-11-05"
  hours: string;
  location: string;
  status: string;
}

interface RawItem {
  Date: string;
  Hours: string;
  Location: string;
  Status: string;
}

const SCHEDULE_URL = import.meta.env.VITE_SCHEDULE_URL as string;

// One shared request, so multiple components (FindUs + the schedule
// section in Step 4) don't each hit the API.
let cache: Promise<ScheduleItem[]> | null = null;

export function fetchSchedule(): Promise<ScheduleItem[]> {
  if (!cache) {
    cache = fetch(SCHEDULE_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: { schedule: RawItem[] }) =>
        data.schedule
          .map((r) => ({
            date: r.Date,
            hours: r.Hours,
            location: r.Location,
            status: r.Status,
          }))
          .sort((a, b) => a.date.localeCompare(b.date)),
      )
      .catch((err) => {
        cache = null; // allow a retry on the next mount
        throw err;
      });
  }
  return cache;
}

// Today's date as "YYYY-MM-DD" in the VISITOR's local time
export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// "2026-11-05" -> a Date at local midnight
export function parseLocalDate(key: string): Date {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDay(key: string): string {
  return parseLocalDate(key).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export const isClosed = (item: ScheduleItem) =>
  ["closed", "cancelled"].includes(item.status.toLowerCase());
