import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../components/home/HomePage";
import App from "../layout/App";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <HomePage /> }],
  },
]);
