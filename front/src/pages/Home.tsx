import * as React from "react";
import { makeStyles } from "@material-ui/core";

import Head from "../components/home/Head";
import Section from "../components/home/Section";

const useStyles = makeStyles(() => ({
  container: {
    padding: 15,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Head />
      <Section />
    </div>
  );
};

export default Home;
