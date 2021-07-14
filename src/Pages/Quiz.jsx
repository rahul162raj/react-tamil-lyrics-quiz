import React, { useState, useEffect } from "react";
import FilterTabs from "../Components/FilterTabs";
import Question from "../Components/Question";
import { getAllQuestions } from "./../Services/MockQuestions";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PageActions from "../Components/PageActions";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(1);
  const startIndex = 1;
  const endIndex = questions.length;

  useEffect(() => {
    const questions = getAllQuestions();
    questions.forEach((item) => {
      item["userAnswer"] = null;
    });
    setQuestions(questions);
  }, []);

  function updateQuestionIndex(increment) {
    if (increment) {
      const index = questionIndex === endIndex ? startIndex : questionIndex + 1;
      setQuestionIndex(index);
    } else {
      const index = questionIndex === startIndex ? endIndex : questionIndex - 1;
      setQuestionIndex(index);
    }
  }

  function updateUserAnswers(question, userAnswer) {
    const allQuestions = [...questions];
    let index = questions.findIndex((item) => item === question);
    if (index > -1) {
      allQuestions[index].userAnswer = userAnswer;
      setQuestions(allQuestions);
    }
  }

  function goToSection(index) {
    setQuestionIndex(index);
  }

  if (questions.length === 0) {
    return <h1>empty</h1>;
  } else {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item md={6}>
            <Box my={4}>
              <Question
                question={questions[questionIndex - 1]}
                updateUserAnswers={updateUserAnswers}
              />
              <PageActions updateQuestionIndex={updateQuestionIndex} />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box my={4}>
              <FilterTabs questions={questions} goToSection={goToSection} />
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
