import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../components/home/HomePage";
import NewJob from "../../components/newJob/NewJob";
import App from "../layout/App";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
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
    ],
  },
]);
