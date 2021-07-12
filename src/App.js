import React, { useEffect, useState } from "react";
import "./styles.css";
import Navbar from "./Pages/Navbar";
import Quiz from "./Pages/Quiz";
import { getAllQuestions } from "./Services/MockQuestions";

export default function App() {
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    const questions = getAllQuestions();
    setQuestions(questions);
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Quiz questions={questions} />
    </React.Fragment>
  );
}
