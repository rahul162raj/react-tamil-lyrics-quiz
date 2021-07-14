import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default function PageActions({ updateQuestionIndex }) {
  const actionButton = [
    { title: "previous", value: false },
    { title: "next", value: true }
  ];
  return (
    <Grid container direction="row" alignItems="center">
      {actionButton.map((item, key) => (
        <Box mr={2}>
          <Grid item key={key}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                updateQuestionIndex(item.value);
              }}
            >
              {item.title}
            </Button>
          </Grid>
        </Box>
      ))}
      {/* <Grid style={{ paddingLeft: "12px", paddingRight: "12px" }}>
              <h4>{questionIndex + "/" + endIndex}</h4>
            </Grid> */}
    </Grid>
  );
}
