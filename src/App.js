import React from "react";
import "./styles.css";
import Navbar from "./Pages/Navbar";
import Quiz from "./Pages/Quiz";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Quiz />
    </React.Fragment>
  );
}
