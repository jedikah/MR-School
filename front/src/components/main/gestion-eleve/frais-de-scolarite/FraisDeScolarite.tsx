import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Grid, Paper } from '@material-ui/core';
import UserTable from './child/UserList';
import UserForm from './child/EcolageForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    setting: {
      margin: 10,
      width: theme.spacing(6),
      height: theme.spacing(6)
    }
  })
);

const FraisDeScolarite: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={8}>
        <div className={classes.paper}>
          <UserTable />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.paper}>
          <Paper className={classes.paper}>
            <UserForm />
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default FraisDeScolarite;
