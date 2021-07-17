import React from "react";

//style
import "./styles.css";

//pages
import Navbar from "./Pages/Navbar";
import Quiz from "./Pages/Quiz";

//material ui
import Container from "@material-ui/core/Container";
import ThemeConfig from "./Themes";

export default function App() {
  return (
    <React.Fragment>
      <ThemeConfig>
        <Navbar />
        <Container>
          <Quiz />
        </Container>
      </ThemeConfig>
    </React.Fragment>
  );
}
