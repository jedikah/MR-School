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
import {
  Toolbar,
  Typography,
  Avatar,
  Box,
  Collapse,
  IconButton,
  Button,
  ButtonGroup,
  TablePagination,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import user from "../../../../assets/user.png";
import { TableRowSkeleton } from "../../../public-component/TableSkeleton";
import { CreateData, generateDataTable } from "./DataCreator";
import { UseEleves } from "../../../../graphql/eleve/eleves/eleves.service";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
    rootPagination: {
      width: "100%",
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

const Row: React.FC<{ row: CreateData }> = (props) => {
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

const Eleves: React.FC<UseEleves> = () => {
  const classes = useStyles();

  let [rows, setRows] = React.useState<CreateData[]>([]);

  React.useEffect(() => {
    setTimeout(() => {
      setRows(generateDataTable(50));
    }, 3000);
  }, []);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [page, setPage] = React.useState(0);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
            {(rows.length > 0 &&
              rows.map((row, index) => <Row key={index} row={row} />)) ||
              (rows.length === 0 && (
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Eleves;
