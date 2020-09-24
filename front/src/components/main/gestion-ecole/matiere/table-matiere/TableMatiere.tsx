import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import TableToolbar from "./TableToolbar";
import { useMatieres } from "../../../../../graphql/matiere/matieres/matieres.service";
import TableCoefficient from "./TableCoefficient";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexGrow: 1,
    },

    paper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
    },

    tableContainer: {
      position: "relative",
      flexGrow: 1,
    },
  })
);

export default function EnhancedTable() {
  const classes = useStyles();
  const { matiereState } = useMatieres();
  const [selected] = React.useState<string[]>([]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
        <TableToolbar
          numSelected={selected.length}
          designationMatiere={
            matiereState.updateMatiereVariables.updateMatiereInput.designation
          }
        />
        <TableContainer className={classes.tableContainer}>
          <TableCoefficient />
        </TableContainer>
      </Paper>
    </div>
  );
}
