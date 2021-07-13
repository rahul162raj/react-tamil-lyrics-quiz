import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const Question = ({ question, updateUserAnswers }) => {
  if (question) {
    const options = question.options;
    return (
      <div>
        <h1>{question.title}</h1>
        <Grid>
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
        <Box my={4}>
          <Typography
            component={"span"}
            variant="h5"
            gutterBottom
            color={
              question.userAnswer && question.userAnswer === question.answer
                ? "primary"
                : "error"
            }
          >
            {question.userAnswer}
          </Typography>
        </Box>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
};

export default Question;
