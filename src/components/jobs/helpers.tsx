import { JobEvent } from "../../data/types";

/**
 * Group events by job
 *  @param events
 *  @returns {Record<string, JobEvent[]>}
 */
export const groupEventsByJob = (
  events: JobEvent[]
): Record<string, JobEvent[]> => {
  return events.reduce((events: Record<string, JobEvent[]>, item: JobEvent) => {
    return {
      ...events,
      [item.job_card_id]: [...(events[item.job_card_id] || []), item],
    };
  }, {});
};
