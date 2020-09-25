import * as React from "react";
import clsx from "clsx";
import {
  Toolbar,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  lighten,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import { TableMatiereMode } from "../../../../../graphql/matiere/matiere.context";
import SubmitCoefficient from "./SubmitCoefficient";

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      display: "flex",
      justifyContent: "space-between",
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
  })
);

interface TableToolbarProps {
  numSelected: number;
  designationMatiere: string;
  tableMode: TableMatiereMode;
  toogleTableMode: (value: TableMatiereMode) => void;
}

const TableToolbar = (props: TableToolbarProps) => {
  const classes = useToolbarStyles();
  const { numSelected, designationMatiere, tableMode, toogleTableMode } = props;

  const plurial = numSelected > 1 ? "s" : "";

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <Typography color="inherit" variant="subtitle1" component="div">
        {designationMatiere || "???"}: {numSelected} classe
        {plurial} selectionnee{plurial}
      </Typography>

      <ToggleButtonGroup
        value={tableMode}
        exclusive
        onChange={(_, value: TableMatiereMode) => {
          if (value !== null) {
            toogleTableMode(value);
          }
        }}
        aria-label="text alignment"
      >
        <ToggleButton
          value={"enseigner" as TableMatiereMode}
          aria-label="left aligned"
        >
          {"Enseigner"}
        </ToggleButton>

        <ToggleButton
          value={"coefficient" as TableMatiereMode}
          aria-label="centered"
        >
          Coefficient
        </ToggleButton>
      </ToggleButtonGroup>

      <SubmitCoefficient />
    </Toolbar>
  );
};

export default TableToolbar;
