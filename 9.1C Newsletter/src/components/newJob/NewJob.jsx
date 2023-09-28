import { collection, doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../firebase";
import React, { useState } from "react";
import JobForm from "./JobForm";
import EmploymentForm from "./EmploymentForm";
import ImageUpload from "./ImageUpload";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Typography,
  Snackbar,
  Alert,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export default function NewJob() {
  const [user] = useAuthState(auth);
  const [jobDetails, setJobDetails] = useState({});
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [jobType, setJobType] = useState("");
  const [imageURL, setImageURL] = useState(null); // Newly added

  const handleRadioChange = (event) => {
    setJobType(event.target.value);
  };

  const handleFileChange = (file) => {
    setImageURL(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      setError("Please login to post a job");
      return;
    }
    const jobCollection = collection(firestore, "jobs");

    // Pass the setImageURL callback to ImageUpload component
    await setDoc(doc(jobCollection), { jobType, imageURL, ...jobDetails });
    setJobDetails({});
    setOpen(true);
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
          <Box>
            <form onSubmit={handleFormSubmit}>
              <JobForm setJobDetails={setJobDetails} jobDetails={jobDetails} />
              {jobType === "Employment" && (
                <EmploymentForm
                  setJobDetails={setJobDetails}
                  jobDetails={jobDetails}
                />
              )}
              {error && <Alert severity="error">{error}</Alert>}
              <ImageUpload onChangeFile={handleFileChange} />
              <Box>
                <Button type="submit" variant="contained">
                  Post
                </Button>
              </Box>
            </form>
          </Box>
        </FormControl>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Job posted successfully"
      />
    </div>
  );
}
