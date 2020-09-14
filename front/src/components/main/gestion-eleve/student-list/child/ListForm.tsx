import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Avatar,
  Button,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import avatarUser from "../../../../../assets/user.png";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
      backgroundColor: "#6A353D",
      color: "white",
      borderRadius: 25,
      width: "23ch",
      marginTop: "20px",
      marginBottom: "10px",
    },
    select: {
      marginTop: 30,
      display: "flex",
      flexDirection: "row",
    },
  })
);

const NewFormStudent: React.FC = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <form noValidate autoComplete="off">
      <Typography variant="h6" gutterBottom>
        Nouveau Etudiant
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
          <TextField required id="nom" label="Nom" />
          <TextField required id="prenom" label="Prenom" />
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              style={{ width: "50%" }}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date Date de naisssance"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField required id="nom" label="Contact" />
          <TextField multiline required rows={3} id="prenom" label="Adress" />
          <FormControl component="fieldset" style={{ marginTop: "20px" }}>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <div style={{ display: "flex" }}>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </Grid>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" className={classes.button} disableElevation>
          enregistrer
        </Button>
      </Box>
    </form>
  );
};

export default NewFormStudent;
