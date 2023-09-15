import {
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Box,
  Grid,
  useTheme,
} from "@mui/material";
import React from "react";

export default function Employment() {
  const theme = useTheme();

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
            <Grid item xs={9}>
              <TextField fullWidth variant="outlined" size="small" />
            </Grid>
          </Grid>
          {/* Job Description */}
          <Grid container margin={2}>
            <Grid item xs={3}>
              <Typography>Job description</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                multiline
                rows={4}
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
                fullWidth
                variant="outlined"
                size="small"
                label="Please add skills that your job is required e.g., Java"
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
                <TextField fullWidth variant="outlined" size="small" />
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
                <TextField variant="outlined" size="small" />
              </Grid>
              <Grid item xs={1}>
                <Typography>Max</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField variant="outlined" size="small" />
              </Grid>
            </Grid>
            {/* Working Hours */}
            <Grid container mt={2} ml={2}>
              <Grid item xs={3}>
                <Typography>Working Hours</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
}
