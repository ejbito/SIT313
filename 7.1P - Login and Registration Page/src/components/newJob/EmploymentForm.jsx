import {
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Box,
  Grid,
} from "@mui/material";
import React from "react";

export default function EmploymentForm() {
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
              <TextField variant="outlined" size="small" />
            </Grid>
            <Grid item>
              <Typography>For at least</Typography>
            </Grid>
            <Grid item xs={3} mx={2}>
              <TextField variant="outlined" size="small" />
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </div>
  );
}
