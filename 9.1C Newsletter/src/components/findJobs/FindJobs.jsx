import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Collapse,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

export default function FindJobs() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsCol = collection(firestore, "jobs");
      const jobSnapshot = await getDocs(jobsCol);
      const jobList = jobSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setJobs(jobList);
    };

    fetchJobs();
  }, []);

  const handleDeleteJob = async (id) => {
    const newJobs = jobs.filter((job) => job.id !== id);
    setJobs(newJobs);
    const jobToDelete = doc(firestore, "jobs", id);
    await deleteDoc(jobToDelete);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (job.title ? job.title.includes(filter) : false) ||
      (job.skills ? job.skills.includes(filter) : false)
  );

  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleFilterChange}
      />
      <Grid container spacing={2}>
        {filteredJobs.map((job) => (
          <Grid item xs={12} md={6} lg={4} key={job.id}>
            <Card
              onClick={() => {
                setSelectedJobId(selectedJobId === job.id ? null : job.id);
              }}
            >
              <CardContent>
                <Typography variant="5">{job.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.description}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Skill Required: {job.skills}
                </Typography>
                <Collapse in={selectedJobId === job.id}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Length: {job.length}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Min Payment: ${job.minPayment}
                  </Typography>
                  <Typography variant="2" color="text.secondary">
                    Max Payment: ${job.maxPayment}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Hours: {job.workingHours}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Job Type: {job.jobType}
                  </Typography>
                </Collapse>
                <Button
                  variant="contained"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteJob(job.id);
                  }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
