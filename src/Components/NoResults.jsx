import React from "react";

//material ui
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default function NoResults({ errorMsg, icon }) {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ height: "60vh" }}
    >
      <Box>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ flexDirection: "column" }}
        >
          <div>{icon}</div>
          <Typography
            component={"span"}
            variant="subtitle1"
            color="textSecondary"
          >
            {errorMsg}
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
}
