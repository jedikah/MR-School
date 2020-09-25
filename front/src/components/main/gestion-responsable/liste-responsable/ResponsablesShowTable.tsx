import React from 'react';
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Toolbar,
  Typography,
  Avatar,
  Box,
  Collapse,
  IconButton,
  Button,
  ButtonGroup,
  Chip
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import user from '../../../../assets/user.png';
import { TableRowSkeleton } from '../../../public-component/TableSkeleton';
import { UseResponsable } from '../../../../graphql/responsable/responsables/responsables.service';
import { Responsable } from '../../../../graphql/types';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        borderBottom: 'unset'
      }
    },
    rootPagination: {
      width: '100%'
    },
    container: {
      height: '80vh',
      maxHeight: '85vh'
    },
    table: {
      minWidth: 650,
      boxShadow: 'null'
    },
    toolbar: {
      backgroundColor: theme.palette.secondary.main,
      color: 'white'
    },
    center: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    tbColapsTitle: {
      fontWeight: 'bold'
    }
  })
);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.secondary.light,
      color: 'white'
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

const Row: React.FC<{ row: Responsable }> = (props) => {
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
            alt={'user'}
            src={user}
            className={classes.center}
          />
        </TableCell>
        <TableCell align="center">{row.utilisateur.prenom}</TableCell>
        <TableCell align="center">
          {row.fonctions.map((fonction) => (
            <Chip
              size="small"
              key={fonction.id}
              label={fonction.designation}
              component="a"
              href="#chip"
              clickable
            />
          ))}
        </TableCell>
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
                      Adress
                    </TableCell>
                    <TableCell align="center" className={classes.tbColapsTitle}>
                      Contact
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">{row.utilisateur.nom}</TableCell>
                    <TableCell align="center">
                      {row.utilisateur.prenom}
                    </TableCell>
                    <TableCell align="center">
                      {row.utilisateur.adresse}
                    </TableCell>
                    <TableCell align="center">
                      {row.utilisateur.contact}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const ResponsablesShowTable: React.FC<Omit<
  UseResponsable,
  'responsableState' | 'responsableDispatch'
>> = ({ loadingResponsable, responsableData }) => {
  const classes = useStyles();
  console.log({ responsableData });

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container} component={Paper}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography
            variant="h6"
            className={[classes.center, classes.tbColapsTitle].join(' ')}
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
                Prenom
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tbColapsTitle}>
                fonction
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tbColapsTitle}>
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(!loadingResponsable &&
              responsableData?.responsables.map((row, index) => (
                <Row key={index} row={row} />
              ))) ||
              (!loadingResponsable && (
                <TableRowSkeleton
                  column={5}
                  width={120}
                  height={40}
                  actionWidth={300}
                  count={30}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ResponsablesShowTable;
