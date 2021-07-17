import React, { useState, useEffect } from "react";

//pages
import FilterTabs from "../Components/FilterTabs";

//components
import Question from "../Components/Question";
import PageActions from "../Components/PageActions";

//services
import { getAllQuestions } from "./../Services/MockQuestions";

//material ui
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

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

  if (questions.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item md={9}>
            <Box mb={4}>
              <Typography component={"span"} variant="h6" color="textSecondary">
                {"Question " + questionIndex}
              </Typography>
            </Box>
            <Box mb={2}>
              <Question
                question={questions[questionIndex - 1]}
                updateUserAnswers={updateUserAnswers}
              />
            </Box>
            <Box mt={5} mb={7}>
              <PageActions updateQuestionIndex={updateQuestionIndex} />
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box>
              <FilterTabs questions={questions} goToSection={goToSection} />
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  function goToSection(index) {
    setQuestionIndex(index);
  }

  function updateQuestionIndex(action) {
    if (action === "previous") {
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
}
