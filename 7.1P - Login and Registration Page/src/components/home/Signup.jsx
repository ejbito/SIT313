import * as React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Signup() {
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" m={4}>
        <Typography variant="h5" sx={{ paddingRight: 2, fontWeight: "bold" }}>
          SIGN UP FOR OUR DAILY INSIDER
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          sx={{ paddingRight: 2 }}
        />
        <Button variant="contained" size="medium">
          See More
        </Button>
      </Box>
    </div>
  );
}
