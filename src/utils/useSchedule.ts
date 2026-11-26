import { useEffect, useState } from "react";
import { fetchSchedule, type ScheduleItem } from "./schedule";

export function useSchedule() {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true; // ignore results if the component unmounts

    fetchSchedule()
      .then((data) => active && setSchedule(data))
      .catch(() => active && setError(true))
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, []);

  return { schedule, loading, error };
}
