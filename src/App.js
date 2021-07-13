import React from "react";
import "./styles.css";
import Navbar from "./Pages/Navbar";
import Quiz from "./Pages/Quiz";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container>
        <Quiz />
      </Container>
    </React.Fragment>
  );
}
