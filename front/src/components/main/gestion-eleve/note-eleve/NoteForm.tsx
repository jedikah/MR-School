import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Grid, Avatar, Button, Box } from "@material-ui/core";
import avatarUser from "../../../../assets/user.png";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

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

const NoteForm: React.FC = () => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <form noValidate autoComplete="off">
      <Typography variant="h6" gutterBottom>
        Note
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
          <TextField required id="matricule" label="Matricule" />
          <TextField required label="Classe" />
          <TextField required label="Matiere" />
        </Grid>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            style={{ width: "50%" }}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="Annee scolaire"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>

        <Grid item xs={12} sm={6}></Grid>
      </Grid>

      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" className={classes.button} disableElevation>
          Enregistrer
        </Button>
      </Box>
    </form>
  );
};

export default NoteForm;
