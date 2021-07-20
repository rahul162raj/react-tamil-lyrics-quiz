import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const Question = ({ question, updateUserAnswers }) => {
  if (question) {
    const options = question.options;
    return (
      <React.Fragment>
        <Typography
          component={"span"}
          variant="h5"
          style={{ fontWeight: "medium" }}
        >
          {question.title}
        </Typography>
        {Object.keys(options).map((option, index) => (
          <Box key={index} my={4}>
            <Grid container alignItems="center">
              <Grid item>
                <Box mr={2}>
                  <Typography
                    style={{
                      fontSize: "0.9375rem",
                    }}
                    component={"span"}
                    variant="button"
                    color={
                      question.userAnswer && question.userAnswer === option
                        ? "primary"
                        : "textPrimary"
                    }
                  >
                    {option})
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Button
                  style={{
                    width: "250px",
                  }}
                  disableRipple
                  variant="outlined"
                  size="large"
                  color={
                    question.userAnswer && question.userAnswer === option
                      ? "primary"
                      : "default"
                  }
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
      </React.Fragment>
    );
  }
};

export default Question;
