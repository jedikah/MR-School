import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import { useMatieres } from "../../../../../graphql/matiere/matieres/matieres.service";
import { TableMatiereMode } from "../../../../../graphql/matiere/matiere.context";
import TableToolbar from "./TableToolbar";
import TableCoefficient from "./TableCoefficient";
import TableEnseigner from "./TableEnseigner";
import { useSetCoefficient } from "../../../../../graphql/coefficient/set-coefficients/setCoefficients.service";

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

export default function TableMatiere() {
  const classes = useStyles();
  const { matiereState, matiereDispatch, matieresData } = useMatieres();
  const { coefficientState, coefficientDispatch } = useSetCoefficient();
  const [selected] = React.useState<string[]>(["1"]);

  const coefficientTableData = () => {
    if (
      matieresData &&
      matieresData.matieres &&
      matiereState.updateMatiereVariables.updateMatiereInput.id
    ) {
      const matiere = matieresData.matieres.find(
        (m) =>
          parseInt(m.id) ===
          matiereState.updateMatiereVariables.updateMatiereInput.id
      );
      return matiere ? matiere.coefficientTable : [];
    }
    return [];
  };

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
            <TableCoefficient
              data={coefficientTableData()}
              selectedClasses={coefficientState.coefficientSelectedClasses}
              coefficientDispatch={coefficientDispatch}
            />
          ) : (
            <TableEnseigner />
          )}
        </TableContainer>
      </Paper>
    </div>
  );
}
