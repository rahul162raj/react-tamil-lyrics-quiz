import React from "react";

//style
import "./styles.css";

//pages
import Navbar from "./Pages/Navbar";
import Dashboard from "./Pages/Dashboard";
import Quiz from "./Pages/Quiz";

//material ui
import Container from "@material-ui/core/Container";
import ThemeConfig from "./Themes";

//context
import AppContext from "./Contexts";

export default function App() {
  return (
    <React.Fragment>
      <ThemeConfig>
        <AppContext>
          <Navbar />
          <Container>
            <Dashboard />
            {/* <Quiz /> */}
          </Container>
        </AppContext>
      </ThemeConfig>
    </React.Fragment>
  );
}
