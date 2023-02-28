import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const JobSelector = ({
  selectJob,
  jobId,
  jobIds,
}: {
  selectJob: (id: string) => void;
  jobId: string;
  jobIds: string[];
}) => (
  <Stack direction="column" spacing={2}>
    <FormControl fullWidth data-testid='job-id-selector'>
      <InputLabel>Job ID</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={jobId}
        label="Job"
        onChange={(event: any) => selectJob(event.target.value)}
      >
        {jobIds.map((jobKey: string) => (
          <MenuItem value={jobKey} key={jobKey}>
            {jobKey}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Stack>
);
