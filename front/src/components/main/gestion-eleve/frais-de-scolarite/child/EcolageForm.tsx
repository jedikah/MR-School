import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Grid, Avatar, Button, Box } from "@material-ui/core";
import avatarUser from "../../../../../assets/user.png";
import echelle from "../../../../../assets/furniture-and-household.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      padding: theme.spacing(1),
    },
    avatar: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    button: {
      backgroundColor: "#1C0808",
      color: "white",
      borderRadius: 25,
      width: "23ch",
      marginTop: "50px",
    },
    select: {
      marginTop: 30,
    },
  })
);

const EcollageForm: React.FC = () => {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <Typography variant="h6" gutterBottom>
        Ecolage
      </Typography>
      <Grid container alignItems="center" justify="center">
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Avatar
            sizes="large"
            alt={"user-avatar"}
            src={avatarUser}
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="matricule"
            label="Matricule"
            placeholder="Matricule"
          />
          <TextField required id="nom" label="Nom" placeholder="Nom" />
          <TextField required id="prenom" label="Prenom" placeholder="Prenom" />
        </Grid>
        <Box justifyContent="flex-end" className={classes.select}>
          <Box display="flex" alignItems="center">
            <Avatar sizes="large" alt={"user-avatar"} src={echelle} />
            <span>Mois de</span>
          </Box>
        </Box>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>

      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" className={classes.button} disableElevation>
          Payé
        </Button>
      </Box>
    </form>
  );
};

export default EcollageForm;
