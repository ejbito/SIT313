import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import JobForm from "./JobForm";
import Employment from "./EmploymentForm";

export default function NewJob() {
  const [jobType, setJobType] = useState("Freelance");

  const handleRadioChange = (event) => {
    setJobType(event.target.value);
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#1976D2",
  };

  return (
    <div>
      <Box width="60%" mx="auto" my={5}>
        <FormControl fullWidth>
          <FormLabel>
            <Typography variant="h6" style={labelStyle}>
              New Job
            </Typography>
          </FormLabel>
          <Box>
            <Box display="flex" alignItems="center">
              <Typography mx={2} pr={3}>
                Select Job Type:
              </Typography>
              <RadioGroup row value={jobType} onChange={handleRadioChange}>
                <FormControlLabel
                  value="Freelance"
                  control={<Radio />}
                  label="Freelance"
                />
                <FormControlLabel
                  value="Employment"
                  control={<Radio />}
                  label="Employment"
                />
              </RadioGroup>
            </Box>
          </Box>
        </FormControl>
        <JobForm />
        {jobType === "Employment" && <Employment />}
        <Button variant="contained">Post</Button>
      </Box>
    </div>
  );
}
