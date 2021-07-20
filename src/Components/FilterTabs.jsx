import React from "react";

//material ui
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FilterTabs({ questions, goToSection }) {
  const answeredItems = questions.filter((item) => item.userAnswer !== null);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (questions.length === 0) {
    return <h1>loading</h1>;
  } else {
    return (
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Instructions" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box mx={2}>
              <Grid container>
                {questions.map((item, key) => (
                  <Grid item key={key} item>
                    <Box mt={2} mb={2} mx={1}>
                      <Button
                        disableElevation
                        size="small"
                        variant={
                          answeredItems.includes(item) ? "outlined" : "outlined"
                        }
                        color={
                          answeredItems.includes(item) ? "primary" : "default"
                        }
                        onClick={() => goToSection(key + 1)}
                      >
                        {key + 1}
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box mx={3} mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
              erat velit scelerisque in. Fringilla ut morbi tincidunt augue
              interdum velit. Neque convallis a cras semper. Nulla malesuada
              pellentesque elit eget gravida. Vel elit scelerisque mauris
              pellentesque pulvinar pellentesque habitant.
            </Box>
          </TabPanel>
        </Paper>
      </div>
    );
  }
}
