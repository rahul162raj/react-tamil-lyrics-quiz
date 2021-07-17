import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useTheme } from "@material-ui/styles";

export default function PageActions({ updateQuestionIndex }) {
  const actionButton = [
    { title: "previous", value: false },
    { title: "next", value: true }
  ];
  const theme = useTheme();
  return (
    <Grid container direction="row" alignItems="center">
      {actionButton.map((item, key) => (
        <Grid item key={key} justifyContent="spacing">
          <Box mr={2}>
            <Button
              size="medium"
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
      {/* <Grid style={{ paddingLeft: "12px", paddingRight: "12px" }}>
              <h4>{questionIndex + "/" + endIndex}</h4>
            </Grid> */}
    </Grid>
  );
}
