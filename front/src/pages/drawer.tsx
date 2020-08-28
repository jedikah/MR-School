import SwipeableTemporaryDrawer from "../components/side-menu/drawer";
import * as React from "react";
import { Route } from "react-router-dom";
import FraisDescolarite from "../components/frais-de-scolarite/FraisDeScolarite";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Drawer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SwipeableTemporaryDrawer />
      <main>
        <Route
          path={`/drawer/frais-de-scolarite`}
          component={FraisDescolarite}
        />
      </main>
    </div>
  );
};

export default Drawer;
