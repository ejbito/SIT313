import React, { useState } from "react";
import {
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Box,
  Grid,
} from "@mui/material";

export default function EmploymentForm({ setJobDetails, jobDetails }) {
  const [experience, setExperience] = useState("");
  const [duration, setDuration] = useState("");

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
    setJobDetails({
      ...jobDetails,
      experience: event.target.value,
    });
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    setJobDetails({
      ...jobDetails,
      duration: event.target.value,
    });
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#1976D2",
  };

  return (
    <div>
      <Box>
        {/* Experience */}
        <FormControl fullWidth>
          <FormLabel>
            <Typography variant="h6" style={labelStyle}>
              Experience
            </Typography>
          </FormLabel>
          <Grid container margin={2}>
            <Grid item>
              <Typography>Experience in</Typography>
            </Grid>
            <Grid item xs={3} mx={2}>
              <TextField
                variant="outlined"
                size="small"
                value={experience}
                onChange={handleExperienceChange}
              />
            </Grid>
            <Grid item>
              <Typography>For at least</Typography>
            </Grid>
            <Grid item xs={3} mx={2}>
              <TextField
                variant="outlined"
                size="small"
                value={duration}
                onChange={handleDurationChange}
              />
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </div>
  );
}
