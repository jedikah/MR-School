import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import { useMatieres } from "../../../../../graphql/matiere/matieres/matieres.service";
import { TableMatiereMode } from "../../../../../graphql/matiere/matiere.context";
import TableToolbar from "./TableToolbar";
import TableCoefficient from "./TableCoefficient";
import TableEnseigner from "./TableEnseigner";

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
  const { matiereState, matiereDispatch } = useMatieres();
  const [selected] = React.useState<string[]>(["1"]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
        <TableToolbar
          tableMode={matiereState.tableMatiere}
          toogleTableMode={(value: TableMatiereMode) =>
            matiereDispatch({ type: "TOOGLE_TABLE_MATIERE", value })
          }
          numSelected={selected.length}
          designationMatiere={
            matiereState.updateMatiereVariables.updateMatiereInput.designation
          }
        />
        <TableContainer className={classes.tableContainer}>
          {matiereState.tableMatiere === "coefficient" ? (
            <TableCoefficient />
          ) : (
            <TableEnseigner />
          )}
        </TableContainer>
      </Paper>
    </div>
  );
}
