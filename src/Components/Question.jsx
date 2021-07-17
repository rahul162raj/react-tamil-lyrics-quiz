import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";

const Question = ({ question, updateUserAnswers }) => {
  if (question) {
    const options = question.options;
    return (
      <React.Fragment>
        <h1>{question.title}</h1>
        <Box>
          {Object.keys(options).map((option, index) => (
            <Box key={index}>
              <Grid container>
                <Grid item>
                  <Box>
                    <Radio
                      size="small"
                      color="primary"
                      checked={
                        question.userAnswer && question.userAnswer === option
                      }
                      value={option}
                      name="answer-radio-button"
                      inputProps={{ "aria-label": option }}
                    />
                  </Box>
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    disableRipple
                    variant="outlined"
                    size="medium"
                    onClick={() => {
                      updateUserAnswers(question, option);
                    }}
                  >
                    {options[option]}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
        {/* <Box my={6}>
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
        </Box> */}
      </React.Fragment>
    );
  } else {
    return <h1>loading</h1>;
  }
};

export default Question;
