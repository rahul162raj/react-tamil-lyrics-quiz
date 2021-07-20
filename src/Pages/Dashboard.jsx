import React from "react";

//material ui
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Grid container justifyContent="space-between">
        {Array(10)
          .fill(0)
          .map((item, key) => (
            <Grid item md={4} key={key}>
              <Box mb={2} px={2} py={2}>
                <Paper>
                  <h1>Hai</h1>
                </Paper>
              </Box>
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
}
