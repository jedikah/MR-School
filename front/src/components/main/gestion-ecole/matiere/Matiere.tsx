import * as React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AddMatiere from "./AddMatiere";
import UpdateMatiere from "./UpdateMatiere";
import ListMatiere from "./ListMatiere";
import TableMatiere from "./table-matiere/TableMatiere";
import { useMatieres } from "../../../../graphql/matiere/matieres/matieres.service";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "94vh",
    maxHeight: "94vh",
  },

  section: {
    padding: theme.spacing(2),
    display: "flex",
    flexFlow: "column",
  },
}));

const Matiere: React.FC = () => {
  const classes = useStyles();
  const { matiereState } = useMatieres();

  const updateMode = () =>
    matiereState.updateMatiereVariables.updateMatiereInput.id !== 0;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={8} className={classes.section}>
        <TableMatiere />
      </Grid>
      <Grid item xs={4} className={classes.section}>
        {updateMode() ? <UpdateMatiere /> : <AddMatiere />}
        <ListMatiere />
      </Grid>
    </Grid>
  );
};

export default Matiere;
