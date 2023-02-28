import { format } from "date-fns";
import { JobEvent } from "../../data/types";

/**
 * Sort events by date ascending.
 *
 * @param {Array} events - Array of events
 * @returns {Array}
 */
export const sortEventsByDate = (events: JobEvent[]): JobEvent[] => {
  return events.sort((a: JobEvent, b: JobEvent) => {
    const date1 = new Date(a.job_event_occurrence);
    const date2 = new Date(b.job_event_occurrence);
    if (date1 > date2) return 1;
    else if (date1 < date2) return -1;
    return 0;
  });
};

/**
 * Group events by day.
 *
 * @param {Array} events - Array of events
 * @param events
 */
export const groupEventsByDate = (
  events: JobEvent[]
): Record<string, JobEvent[]> => {
  return events.reduce((events: Record<string, JobEvent[]>, item: JobEvent) => {
    const eventDate = format(
      new Date(item.job_event_occurrence),
      "dd MMMM yyyy"
    );
    return {
      ...events,
      [eventDate]: [...(events[eventDate] || []), item],
    };
  }, {});
};
