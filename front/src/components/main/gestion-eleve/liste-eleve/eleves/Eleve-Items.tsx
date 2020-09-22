import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Typography,
  Avatar,
  Box,
  Collapse,
  IconButton,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import user from "../../../../../assets/user.png";
import { Data } from "./DataCreator";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
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

const EleveItems: React.FC<{ row: Data }> = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Avatar
            sizes="small"
            alt={"user"}
            src={user}
            className={classes.center}
          />
        </TableCell>
        <TableCell align="center">{row.matricule}</TableCell>
        <TableCell align="center">{row.nom}</TableCell>
        <TableCell align="center">{row.prenom}</TableCell>
        <TableCell align="center">
          <ButtonGroup
            size="small"
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button
              disableFocusRipple={true}
              variant="contained"
              color="primary"
            >
              Update
            </Button>
            <Button
              disableFocusRipple={true}
              variant="contained"
              color="primary"
            >
              Classification
            </Button>
            <Button
              disableFocusRipple={true}
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className={classes.tbColapsTitle}
              >
                Utilisateur
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Nom
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Prenom
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Mot de passe
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Adress
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Contact
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.utilisateur.map((utilisateurRow) => (
                    <TableRow key={utilisateurRow.id}>
                      <TableCell align="center">{utilisateurRow.nom}</TableCell>
                      <TableCell align="center">
                        {utilisateurRow.prenom}
                      </TableCell>
                      <TableCell align="center">
                        {utilisateurRow.motDePasse}
                      </TableCell>
                      <TableCell align="center">
                        {utilisateurRow.adresse}
                      </TableCell>
                      <TableCell align="center">
                        {utilisateurRow.contact}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className={classes.tbColapsTitle}
              >
                Eleve
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Matricule
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Naissance
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Sexe
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.eleve.map((eleveRow) => (
                    <TableRow key={eleveRow.matricule}>
                      <TableCell align="center">{eleveRow.matricule}</TableCell>
                      <TableCell align="center">{eleveRow.naissance}</TableCell>
                      <TableCell align="center">{eleveRow.sexe}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className={classes.tbColapsTitle}
              >
                Parent
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Père
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      mère
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Tuteur
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Contact
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Adresse
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.parent.map((parenRow) => (
                    <TableRow key={parenRow.id}>
                      <TableCell align="center">{parenRow.pere}</TableCell>
                      <TableCell align="center">{parenRow.mere}</TableCell>
                      <TableCell align="center">{parenRow.tuteur}</TableCell>
                      <TableCell align="center">{parenRow.contact}</TableCell>
                      <TableCell align="center">{parenRow.adresse}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default EleveItems;
