import * as React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  TableHead,
} from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import CoefficientValue from "./CoefficientValue";
import { CoefficientTable } from "../../../../../graphql/types";
import { CoefficientDispatch } from "../../../../../graphql/coefficient/coefficient.context";

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

export interface TableCoefficientProps {
  data: CoefficientTable[];
  selectedClasses: readonly number[];
  coefficientDispatch: CoefficientDispatch;
}

const TableCoefficient: React.FC<TableCoefficientProps> = ({
  data,
  selectedClasses,
  coefficientDispatch,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  React.useEffect(() => {
    data.forEach((coe) => {
      if (coe.status && !selectedClasses.includes(coe.classe.id)) {
        coefficientDispatch({
          type: "TOOGLE_SELECT_CLASSE_COEFFICIENT",
          classeId: coe.classe.id,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const isAllChecked = () => {
    if (!data.length) return false;

    let allChecked = true;
    data.forEach((coe) => {
      if (!selectedClasses.includes(coe.classe.id)) {
        allChecked = false;
      }
    });
    return allChecked;
  };

  const handleChangeCheckAll = () => {
    if (isAllChecked()) {
      data.forEach((coe) => {
        coefficientDispatch({
          type: "TOOGLE_SELECT_CLASSE_COEFFICIENT",
          classeId: coe.classe.id,
        });
      });
    } else {
      data.forEach((coe) => {
        if (!selectedClasses.includes(coe.classe.id)) {
          coefficientDispatch({
            type: "TOOGLE_SELECT_CLASSE_COEFFICIENT",
            classeId: coe.classe.id,
          });
        }
      });
    }
  };

  const status = (status: boolean) => (
    <div
      style={{
        backgroundColor: status ? theme.palette.success.light : grey["A100"],
        color: "white",
        maxWidth: theme.spacing(10),
        minWidth: theme.spacing(10),
        padding: theme.spacing(1),
        borderRadius: theme.spacing(1),
      }}
    >
      {status ? "Etudie" : "N'etudie pas"}
    </div>
  );

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
            <Checkbox
              checked={isAllChecked()}
              inputProps={{ "aria-labelledby": "0" }}
              onChange={handleChangeCheckAll}
            />
          </TableCell>

          <TableCell scope="row" align="left" className={classes.columText}>
            Classe
          </TableCell>

          <TableCell scope="row" align="center" className={classes.columText}>
            Coefficient
          </TableCell>

          <TableCell scope="row" align="center" className={classes.columText}>
            Status
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row, index) => {
          const isItemSelected = selectedClasses.includes(row.classe.id);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => {}}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.classe.id}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isItemSelected}
                  inputProps={{ "aria-labelledby": labelId }}
                  onChange={() => {
                    coefficientDispatch({
                      type: "TOOGLE_SELECT_CLASSE_COEFFICIENT",
                      classeId: row.classe.id,
                    });
                  }}
                />
              </TableCell>

              <TableCell scope="row" align="left">
                {row.classe.designation}
              </TableCell>

              <TableCell scope="row" align="center">
                <CoefficientValue
                  classeId={row.classe.id}
                  value={row.coefficient || 0}
                  disabled={row.status}
                />
              </TableCell>

              <TableCell
                scope="row"
                align="center"
                style={{ justifyContent: "center", display: "flex" }}
              >
                {status(row.status)}
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

export default TableCoefficient;
