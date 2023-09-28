import "./App.css";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
