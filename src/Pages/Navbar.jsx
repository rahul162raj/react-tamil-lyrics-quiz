import React, { useContext } from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import { ThemeContext } from "./../Themes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  successButton: {
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <Box mb={5}>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <AudiotrackIcon fontSize="small" />
            <Typography
              component={"span"}
              variant="h6"
              className={classes.title}
            >
              Qurics
            </Typography>
            <Box mr={2}>
              <IconButton onClick={toggleTheme}>
                {mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness6Icon style={{ color: "white" }} />
                )}
              </IconButton>
            </Box>
            <Button
              size="medium"
              variant="contained"
              className={classes.successButton}
            >
              Submit
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
