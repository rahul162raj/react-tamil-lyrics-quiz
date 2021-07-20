import React from "react";

//material ui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function PageActions({ updateQuestionIndex }) {
  const actionButton = [{ title: "previous" }, { title: "next" }];
  return (
    <Grid container direction="row" alignItems="center">
      {actionButton.map((item, key) => (
        <Grid item key={key}>
          <Box mr={2}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              disableRipple
              disableElevation
              startIcon={item.title === "previous" ? <ArrowBackIcon /> : ""}
              endIcon={item.title === "next" ? <ArrowForwardIcon /> : ""}
              onClick={() => {
                updateQuestionIndex(item.title);
              }}
            >
              {item.title}
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
