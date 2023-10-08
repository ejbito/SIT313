import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  CardMedia,
  Typography,
  Collapse,
  Button,
} from "@mui/material";
import { doc, deleteDoc, onSnapshot, collection } from "@firebase/firestore";
import { firestore } from "../../firebase";

export default function FindJobs() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    const jobsRef = collection(firestore, "jobs"); // Replace "jobs" with your Firestore collection name
    const jobsListener = onSnapshot(jobsRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setJobs(data);
    });

    return () => {
      jobsListener();
    };
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
      job.title.toLowerCase().includes(filter.toLowerCase()) ||
      job.skills.toLowerCase().includes(filter.toLowerCase())
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
              onClick={() =>
                setSelectedJobId(selectedJobId === job.id ? null : job.id)
              }
            >
              {(job.imageUrls || []).map((image, index) => (
                <CardMedia src={image} alt="img" key={index} height="140" />
              ))}
              <CardContent>
                <Typography variant="h5">{job.title}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {job.description}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Skills Required: {job.skills}
                </Typography>
                <Collapse in={selectedJobId === job.id}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Length: {job.length}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Min Payment: ${job.minPayment}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
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
