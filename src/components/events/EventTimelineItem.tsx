import React, { ReactElement } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { format } from "date-fns";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Grid, Link, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ScheduleIcon from "@mui/icons-material/Schedule";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import HomeIcon from "@mui/icons-material/Home";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import CancelIcon from "@mui/icons-material/Cancel";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import PeopleIcon from "@mui/icons-material/People";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { JobEvent } from "../../data/types";
import { theme } from "../../theme";

const EventsMap: Record<
  string,
  { label: string; icon: ReactElement; color: string }
> = {
  started: {
    label: "Started",
    icon: <PlayCircleFilledWhiteIcon />,
    color: theme.palette.success.main,
  },
  scheduled: {
    label: "Scheduled",
    icon: <ScheduleIcon />,
    color: theme.palette.info.main,
  },
  on_break: {
    label: "On Break",
    icon: <FreeBreakfastIcon />,
    color: theme.palette.warning.main,
  },
  clocked_out: {
    label: "Clocked Out",
    icon: <HomeIcon />,
    color: theme.palette.warning.main,
  },
  in_progress: {
    label: "In Progress",
    icon: <HourglassTopIcon />,
    color: theme.palette.success.main,
  },
  downtime: {
    label: "Downtime",
    icon: <CrisisAlertIcon />,
    color: theme.palette.error.main,
  },
  canceled: {
    label: "Canceled",
    icon: <CancelIcon />,
    color: theme.palette.error.light,
  },
  downtime_report_submitted: {
    label: "Downtime Report Submitted",
    icon: <AppRegistrationIcon />,
    color: theme.palette.error.main,
  },
  overrun_report_submitted: {
    label: "Overrun Report Submitted",
    icon: <AppRegistrationIcon />,
    color: theme.palette.warning.main,
  },
  submit_downtime_report_causes: {
    label: "Submit Downtime Report Causes",
    icon: <AppRegistrationIcon />,
    color: theme.palette.error.main,
  },
  job_signed_off: {
    label: "Job Signed Off",
    icon: <NoteAltIcon />,
    color: theme.palette.warning.main,
  },
  headcount_changed: {
    label: "Headcount Changed",
    icon: <PeopleIcon />,
    color: theme.palette.info.main,
  },
  in_process_check_changed: {
    label: "In Process Check Changed",
    icon: <PlaylistAddCheckIcon />,
    color: theme.palette.info.main,
  },
};

const eventMetaData = (event: JobEvent) => {
  return (
    <Box maxWidth={800}>
      <Grid
        container
        sx={{ paddingTop: 10 }}
        spacing={2}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
      >
        <Grid item display={"flex"} alignItems={"center"}>
          <Typography variant={"subtitle1"} style={{ marginRight: 8 }}>
            Event id:
          </Typography>
          <Typography variant={"body2"}>{event.job_event_id}</Typography>
        </Grid>
        <Grid item display={"flex"} alignItems={"center"}>
          <Typography variant={"subtitle1"} style={{ marginRight: 8 }}>
            Job card id:
          </Typography>
          <Typography variant={"body2"}>{event.job_card_id}</Typography>
        </Grid>
        <Grid item>
          <Typography variant={"subtitle1"}>Metadata</Typography>
        </Grid>
        <Grid item>
          <pre style={{ textAlign: "left" }}>
            {JSON.stringify(event.job_event_metadata, null, 2)}
          </pre>
        </Grid>
      </Grid>
    </Box>
  );
};

export const EventTimelineItem = ({ event }: { event: JobEvent }) => {
  const [showMoreInfo, setShowMoreInfo] = React.useState(false);
  const eventType: string =
    typeof event.job_event_type === "string" ? event.job_event_type : "";
  return (
    <TimelineItem key={event.job_event_id} data-testid='timeline-item'>
      <TimelineOppositeContent
        align="right"
        variant="body2"
        color="text.secondary"
        style={{ paddingTop: 20 }}
      >
        {format(new Date(event.job_event_occurrence), "HH:mm:ss")}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot style={{ backgroundColor: EventsMap[eventType].color }}>
          {EventsMap[eventType].icon}
        </TimelineDot>
        <TimelineConnector
          style={{ height: showMoreInfo ? "100%" : 30 }}
        ></TimelineConnector>
      </TimelineSeparator>
      <TimelineContent
        style={{ paddingTop: 10, width: "50%", cursor: "pointer" }}
        onClick={() => setShowMoreInfo(!showMoreInfo)}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant={"body1"}>
            {" "}
            {EventsMap[eventType].label}
          </Typography>
        </Box>
        <Typography variant={"body2"}> {event.job_event_user} </Typography>
        {showMoreInfo && eventMetaData(event)}
      </TimelineContent>
      <Link
        onClick={() => setShowMoreInfo(!showMoreInfo)}
        style={{ cursor: "pointer" }}
      >
        {showMoreInfo ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Link>
    </TimelineItem>
  );
};
