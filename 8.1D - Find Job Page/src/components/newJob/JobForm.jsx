import React from "react";
import {
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Box,
  Grid,
  useTheme,
} from "@mui/material";

export default function JobForm({ jobDetails, setJobDetails }) {
  const theme = useTheme();

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const labelStyle = {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  };

  return (
    <div>
      <Box>
        {/* Describe your job */}
        <FormControl fullWidth>
          <FormLabel>
            <Typography variant="h6" sx={labelStyle}>
              Describe your job
            </Typography>
          </FormLabel>
          {/* Title/Position */}
          <Grid container margin={2}>
            <Grid item xs={3}>
              <Typography>Title/Position</Typography>
            </Grid>
            <Grid item={9}>
              <TextField
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
                name="title"
                value={jobDetails.title}
              />
            </Grid>
          </Grid>
          {/* Job Description */}
          <Grid container margin={2}>
            <Grid item xs={3}>
              <Typography>Job description</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
                multiline
                rows={4}
                name="description"
                value={jobDetails.description}
              />
            </Grid>
          </Grid>
          {/* Skills */}
          <Grid container margin={2}>
            <Grid item xs={3}>
              <Typography>Skills</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
                label="Please add skills that your job is required e.g., Java"
                name="skills"
                value={jobDetails.skills}
              />
            </Grid>
          </Grid>
          <Typography>
            Developers will find your job based on the skills you added here.
          </Typography>
        </FormControl>

        <Box marginY={3}>
          {/* Project Conditions */}
          <FormControl fullWidth>
            <Typography variant="h6" sx={labelStyle}>
              Project Conditions
            </Typography>
            {/* Project Length */}
            <Grid container margin={2}>
              <Grid item xs={3}>
                <Typography>Project Length</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="length"
                  value={jobDetails.length}
                />
              </Grid>
            </Grid>
            {/* Payment */}
            <Grid container margin={3}>
              <Grid item xs={3}>
                <Typography>Payment</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>Min</Typography>
              </Grid>
              <Grid item xs={3} marginX={1}>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  name="minPayment"
                  value={jobDetails.minPayment}
                />
              </Grid>
              <Grid item xs={1}>
                <Typography>Max</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  name="maxPayment"
                  value={jobDetails.maxPayment}
                />
              </Grid>
            </Grid>
            {/* Working Hours */}
            <Grid container mt={2} ml={2}>
              <Grid item xs={3}>
                <Typography>Working Hours</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="workingHours"
                  value={jobDetails.workingHours}
                />
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
}
