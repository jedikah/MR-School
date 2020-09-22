import React from "react";
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Toolbar, Typography } from "@material-ui/core";
import { Data } from "./DataCreator";
import { UseEleves } from "../../../../../graphql/eleve/eleves/eleves.service";
import { TableRowSkeleton } from "../../../../public-component/TableSkeleton";
import EleveItems from "./Eleve-Items";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
    container: {
      height: "80vh",
      maxHeight: "85vh",
    },
    table: {
      minWidth: 650,
      boxShadow: "null",
    },
    toolbar: {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
    center: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    tbColapsTitle: {
      fontWeight: "bold",
    },
  })
);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const Eleves: React.FC<UseEleves> = ({ elevesData, elevesLoading }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container} component={Paper}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography
            variant="h6"
            className={[classes.center, classes.tbColapsTitle].join(" ")}
            id="tableTitle"
            component="div"
          >
            Lists étudiants
          </Typography>
        </Toolbar>

        <Table size="small" className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" />
              <StyledTableCell align="center" className={classes.tbColapsTitle}>
                Photo
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tbColapsTitle}>
                Matricule
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tbColapsTitle}>
                Nom
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tbColapsTitle}>
                Prenom
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tbColapsTitle}>
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(elevesData &&
              elevesData.eleves.eleves.map((row) => {
                const eleve: Data = {
                  matricule: row.matricule,
                  nom: row.utilisateur.nom,
                  prenom: row.utilisateur.prenom,
                  photo: row.utilisateur.photo,
                  eleve: [
                    {
                      matricule: row.matricule,
                      naissance: row.naissance,
                      sexe: row.sexe,
                    },
                  ],
                  parent: [row.parent],
                  utilisateur: [row.utilisateur],
                };
                return <EleveItems key={row.utilisateur.id} row={eleve} />;
              })) ||
              (elevesLoading && (
                <TableRowSkeleton
                  column={6}
                  width={120}
                  height={40}
                  actionWidth={300}
                  count={50}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Eleves;
