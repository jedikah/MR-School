import * as React from "react";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AddMatiere from "./AddMatiere";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(3),
  },
}));

const Matiere: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={8} className={classes.section}>
        <Card elevation={4}></Card>
      </Grid>
      <Grid item xs={4} className={classes.section}>
        <AddMatiere />
      </Grid>
    </Grid>
  );
};

export default Matiere;
