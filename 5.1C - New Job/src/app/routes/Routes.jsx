import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../components/home/HomePage";
import NewJob from "../../components/newJob/NewJob";
import App from "../layout/App";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "new-job", element: <NewJob /> },
    ],
  },
]);
