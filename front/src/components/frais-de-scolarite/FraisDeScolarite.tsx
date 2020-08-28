import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { Grid, Paper, Avatar, Box } from "@material-ui/core";
import UserTable from "./child/UserList";
import UserForm from "./child/EcolageForm";
import setting from "../../assets/settings.png";
import NavBar from "./NavBar";

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

const FraisDeScolarite: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Avatar alt={"user-avatar"} src={setting} className={classes.setting} />
      </Box>
      <NavBar />
      <Grid container spacing={3}>
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
    </>
  );
};

export default FraisDeScolarite;
