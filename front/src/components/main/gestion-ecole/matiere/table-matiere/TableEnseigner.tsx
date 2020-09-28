import * as React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import AffectProfesseur from "./AffectProfesseur";
import { EnseignerTable } from "../../../../../graphql/types";
import { useProfesseurs } from "../../../../../graphql/responsable/professeurs/professeurs.service";

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

export interface TableEnseignerProps {
  data: EnseignerTable[];
}

const TableEnseigner: React.FC<TableEnseignerProps> = ({ data }) => {
  useProfesseurs();
  const classes = useStyles();
  const theme = useTheme();

  const status = (status: boolean) => (
    <div
      style={{
        backgroundColor: status ? theme.palette.success.light : grey["A100"],
        color: "white",
        maxWidth: theme.spacing(20),
        minWidth: theme.spacing(20),
        padding: theme.spacing(1),
        borderRadius: theme.spacing(1),
      }}
    >
      {status ? "Tenu par un professeur" : "Pas de professeur"}
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
          <TableCell scope="row" className={classes.columText}>
            Classe
          </TableCell>

          <TableCell scope="row" align="left" className={classes.columText}>
            Section
          </TableCell>

          <TableCell scope="row" align="center" className={classes.columText}>
            Status
          </TableCell>

          <TableCell scope="row" align="center" className={classes.columText}>
            Professeur
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row) => {
          const isSelected = row.professeur.length > 0;

          return (
            <TableRow
              hover
              onClick={() => {}}
              role="checkbox"
              tabIndex={-1}
              key={`${row.classe.id}${row.section.id}`}
              selected={isSelected}
            >
              <TableCell padding="checkbox">{row.classe.designation}</TableCell>

              <TableCell scope="row" align="left">
                {row.section.designation}
              </TableCell>

              <TableCell
                scope="row"
                align="center"
                style={{ justifyContent: "center", display: "flex" }}
              >
                {status(row.status)}
              </TableCell>

              <TableCell scope="row" align="center">
                <AffectProfesseur
                  classe={row.classe}
                  section={row.section}
                  affected={row.professeur}
                />
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
