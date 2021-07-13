import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Question = ({ question, updateUserAnswers }) => {
  if (question) {
    const options = question.options;
    return (
      <div>
        <h1>{question.title}</h1>
        <Grid spacing={3}>
          {Object.keys(options).map((key, index) => (
            <Grid key={index} item style={{ paddingBottom: "12px" }}>
              <Button
                variant="outlined"
                fullwidth="true"
                onClick={() => {
                  updateUserAnswers(question, key);
                }}
              >
                {options[key]}
              </Button>
            </Grid>
          ))}
        </Grid>
        <h1>{question.userAnswer}</h1>
        <h1>{question.userAnswer === question.answer ? "correct" : "wrong"}</h1>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
};

export default Question;
