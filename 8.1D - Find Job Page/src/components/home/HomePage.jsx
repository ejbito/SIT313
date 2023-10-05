import { Container } from "@mui/material";
import Developer from "./Developer";
import Customer from "./Customer";
import Signup from "./Signup";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div>
      <Container>
        <Developer></Developer>
        <Customer></Customer>
      </Container>
      <Signup></Signup>
      <Footer></Footer>
    </div>
  );
}
