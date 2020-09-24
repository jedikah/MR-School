import * as React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  TableHead,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface Data {
  classe: string;
  section: string;
}

function createData(classe: string, section: string): Data {
  return { classe, section };
}

const rows = [
  createData("seconde", "A"),
  createData("premiere", "B"),
  createData("terminal", "C"),
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 750,
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },

    columText: {
      fontWeight: "bold",
    },
  })
);

const TableEnseigner: React.FC = () => {
  const classes = useStyles();
  return (
    <Table
      className={classes.table}
      aria-labelledby="tableTitle"
      size={"small"}
      aria-label="enhanced table"
    >
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" scope="row">
            <Checkbox checked={false} inputProps={{ "aria-labelledby": "0" }} />
          </TableCell>

          <TableCell scope="row" align="left" className={classes.columText}>
            Classe
          </TableCell>

          <TableCell scope="row" align="center" className={classes.columText}>
            Section
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row, index) => {
          const isItemSelected = false;
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => {}}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.classe}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isItemSelected}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </TableCell>

              <TableCell scope="row" align="left">
                {row.classe}
              </TableCell>

              <TableCell scope="row" align="center">
                {row.section}
              </TableCell>
            </TableRow>
          );
        })}

        <TableRow style={{ height: 33 }}>
          <TableCell colSpan={6} />
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableEnseigner;
