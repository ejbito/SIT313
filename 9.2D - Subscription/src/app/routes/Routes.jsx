import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../components/home/HomePage";
import NewJob from "../../components/newJob/NewJob";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import FindJobs from "../../components/findJobs/FindJobs";
import StripeContainer from "../../stripe";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "find-devs", element: <NewJob /> },
      { path: "login", element: <Login /> },
      { path: "create-account", element: <Register /> },
      { path: "find-jobs", element: <FindJobs /> },
      { path: "payment", element: <StripeContainer /> },
    ],
  },
]);
