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

function createData(
  photo: string,
  nom: string,
  prenom: string,
  contact: string,
  adresse: string
) {
  return { photo, nom, prenom, contact, adresse };
}

const rows = [
  createData("photo 1", "nom1", "prenom1", "contact1", "adresse1"),
  createData("photo 2", "nom2", "prenom2", "contact2", "adresse2"),
  createData("photo 3", "nom3", "prenom3", "contact3", "adresse3"),
  createData("photo 4", "nom4", "prenom4", "contact4", "adresse4"),
];

const Eleves: React.FC<UseEleves> = ({ elevesData }) => {
  const classes = useStyles();
  console.log(elevesData);
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
            <StyledTableCell align="center">Nom</StyledTableCell>
            <StyledTableCell align="center">Prenom</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Adresse</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">
                <Avatar
                  sizes="small"
                  alt={"user"}
                  src={user}
                  className={classes.center}
                />
              </TableCell>
              <TableCell align="center">{row.nom}</TableCell>
              <TableCell align="center">{row.prenom}</TableCell>
              <TableCell align="center">{row.contact}</TableCell>
              <TableCell align="center">{row.adresse}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Eleves;
