import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Container,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Navbar() {
  return (
    <div>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <List>
                <ListItem>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    For Dev
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h7">How it works</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h7">How to create a profile</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h7">Find Jobs</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <List>
                <ListItem>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    For Client
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h7">How it works</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h7">How to post a job</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h7">Find Dev</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <List>
                <ListItem>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Stay Connected
                  </Typography>
                </ListItem>
                <ListItem>
                  <FacebookIcon></FacebookIcon>
                  <TwitterIcon></TwitterIcon>
                  <InstagramIcon></InstagramIcon>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Typography
          display="flex"
          justifyContent="center"
          alignItems="center"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          DevLink
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h7" sx={{ paddingRight: 2 }}>
            Privacy Policy
          </Typography>
          <Typography variant="h7" sx={{ paddingRight: 2 }}>
            Terms
          </Typography>
          <Typography variant="h7">Code of Conduct</Typography>
        </Box>
      </Container>
    </div>
  );
}
