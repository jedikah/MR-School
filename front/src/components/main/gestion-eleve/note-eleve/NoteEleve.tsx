import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";
import EleveList from "./EleveList";
import NoteForm from "./NoteForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    setting: {
      margin: 10,
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  })
);

const NoteEleve: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={8}>
        <div className={classes.paper}>
          <EleveList />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.paper}>
          <Paper className={classes.paper}>
            <NoteForm />
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default NoteEleve;
