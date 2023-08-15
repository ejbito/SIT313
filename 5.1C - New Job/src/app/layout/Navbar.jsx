import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "New Job", path: "/new-job" },
  { title: "Find Jobs", path: "/find-jobs" },
];

const rightLinks = [
  { title: "Login", path: "/login" },
  { title: "Create Account", path: "/create-account" },
];

const linkStyles = {
  color: "inherit",
  whiteSpace: "nowrap",
  typography: "body1",
  fontSize: "18px",
  textDecoration: "none",
  fontWeight: "bold",
  "&:hover": { color: "primary.light" },
};

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
          width: "100%",
          maxWidth: "70%",
          margin: "auto",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="h5"
            color="primary"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            component={NavLink}
            to="/"
          >
            DevLink
            <StoreOutlinedIcon sx={{ fontSize: 32, marginLeft: 1 }} />
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={linkStyles}
              >
                {title}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box display="flex" alignItems="center">
          <List sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              component={NavLink}
              to={rightLinks[0].path}
              key={rightLinks[0].path}
              sx={{ fontWeight: "bold" }}
            >
              {rightLinks[0].title}
            </Button>
            <Button
              variant="contained"
              component={NavLink}
              to={rightLinks[1].path}
              key={rightLinks[1].path}
              sx={{ fontWeight: "bold" }}
            >
              {rightLinks[1].title}
            </Button>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
