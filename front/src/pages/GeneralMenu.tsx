import * as React from "react";
import { makeStyles } from "@material-ui/core";

import Head from "../components/general-menu/Head";
import Section from "../components/general-menu/Section";

const useStyles = makeStyles(() => ({
  container: {
    padding: 15,
  },
}));

const GeneralMenuPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Head />
      <Section />
    </div>
  );
};

export default GeneralMenuPage;
