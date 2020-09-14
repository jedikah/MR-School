import React from "react";
import { makeStyles, Theme, Box, Avatar } from "@material-ui/core";

import Drawer from "../components/main/drawer";
import setting from "../assets/settings.png";
import Navbar from "../components/main/NavBar";
import MainNavigation from "../navigations/MainNavigation";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  left: {
    width: "30%",
  },
  right: {
    width: "100%",
  },
  nav: {
    height: "fit-content",
  },
  setting: {
    margin: 10,
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer />
      <div className={classes.right}>
        <div className={classes.nav}>
          <Box display="flex" justifyContent="flex-end">
            <Avatar
              alt={"user-avatar"}
              src={setting}
              className={classes.setting}
            />
          </Box>
          <Navbar />
        </div>
        <div>
          <MainNavigation />
        </div>
      </div>
    </div>
  );
};

export default Main;
