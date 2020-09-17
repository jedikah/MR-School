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
import { Toolbar, Typography, Avatar } from "@material-ui/core";
import user from "../../../../assets/user.png";
import { UseEleves } from "../../../../graphql/eleve/eleves/eleves.service";

const useStyles = makeStyles((theme) =>
  createStyles({
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

  const data = elevesData && !elevesLoading ? elevesData.eleves.eleves : [];

  return (
    <TableContainer component={Paper}>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Typography
          variant="h6"
          className={classes.center}
          id="tableTitle"
          component="div"
        >
          Lists étudiants
        </Typography>
      </Toolbar>
      <Table size="small" className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Photo</StyledTableCell>
            <StyledTableCell align="center">Matricule</StyledTableCell>
            <StyledTableCell align="center">Nom</StyledTableCell>
            <StyledTableCell align="center">Prenom</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((eleve) => (
            <TableRow key={eleve.utilisateur.id}>
              <TableCell align="center">
                <Avatar
                  sizes="small"
                  alt={"user"}
                  src={user}
                  className={classes.center}
                />
              </TableCell>
              <TableCell align="center">{eleve.matricule}</TableCell>
              <TableCell align="center">{eleve.utilisateur.nom}</TableCell>
              <TableCell align="center">{eleve.utilisateur.prenom}</TableCell>
              <TableCell align="center">modifier / classer</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Eleves;
