import React, { useState, useMemo } from "react";
import trunk_logo from "./trunk_logo.png";
import "./App.css";
import events from "./data/events.json";
import { ThemeProvider, Stack } from "@mui/material";
import { theme } from "./theme";
import { JobSelector } from "./components/jobs/JobSelector";
import { Events } from "./components/events/Events";
import { groupEventsByJob } from "./components/jobs/helpers";

function App() {
  const eventsGroupedByJob = useMemo(() => groupEventsByJob(events), [events]);
  const jobKeys = useMemo(
    () => Object.keys(eventsGroupedByJob),
    [eventsGroupedByJob]
  );

  const [jobId, setJobId] = useState(jobKeys[0]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack direction="column" spacing={10}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems={{ xs: "center", sm: "flex-end" }}
            spacing={4}
          >
            <div>
              <img src={trunk_logo} alt="logo" width={150} />
            </div>
            <div>
              <JobSelector
                jobId={jobId}
                jobIds={jobKeys}
                selectJob={setJobId}
              />
            </div>
          </Stack>
          <Events events={eventsGroupedByJob[jobId]} />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
