import { Chip, Grid, Stack, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { EventTimelineItem } from "./EventTimelineItem";
import React from "react";
import { groupEventsByDate, sortEventsByDate } from "./helpers";
import { JobEvent } from "../../data/types";

export const Events = ({ events }: { events: JobEvent[] }) => {
  const eventsSorted = sortEventsByDate(events);
  const eventsByDate = groupEventsByDate(eventsSorted);
  const dateKeys = Object.keys(eventsByDate);
  return (
    <div>
      {dateKeys.map((date: string) => (
        <div key={date}>
          <Stack alignItems="flex-end">
            <Chip label={date} />
          </Stack>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            {eventsByDate[date].map((e: JobEvent) => (
              <EventTimelineItem event={e} key={e.job_event_id} />
            ))}
          </Timeline>
        </div>
      ))}
    </div>
  );
};
