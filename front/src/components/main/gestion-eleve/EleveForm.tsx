import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Avatar,
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Button,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import EditIcon from "@material-ui/icons/Edit";

import studentIcon from "../../../assets/student.png";
import parentIcon from "../../../assets/001-family.png";
import infoIcon from "../../../assets/001-information.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },

  eleveAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: 10,
  },

  section: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  submitBtn: {
    borderRadius: "50px 50px 50px 50px",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10,
  },

  circularProgress: {
    color: "#fff",
    marginLeft: 15,
  },
}));

const EleveForm: React.FC = () => {
  const classes = useStyles();

  return (
    <form className={classes.container}>
      <Paper style={{ padding: 5 }} elevation={4}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{ marginTop: 25 }}
        >
          <div style={{ position: "relative" }}>
            <Avatar alt="eleve profile" className={classes.eleveAvatar} />
            <IconButton
              aria-label="edit photo eleve"
              style={{ position: "absolute", left: -20, bottom: 0 }}
            >
              <EditIcon fontSize="large" />
            </IconButton>
          </div>
        </Box>

        <div className={classes.section}>
          <Box display="flex" alignItems="center">
            <Avatar src={studentIcon} alt="student" />
            <Typography variant="h5" style={{ marginLeft: 10 }}>
              Information eleve
            </Typography>
          </Box>

          <Box display="flex" marginBottom>
            <RadioGroup row aria-label="gender" name="gender1" value={"homme"}>
              <FormControlLabel
                value="homme"
                control={<Radio />}
                label="homme"
              />
              <FormControlLabel
                value="femme"
                control={<Radio />}
                label="femme"
              />
            </RadioGroup>
          </Box>
          <Box display="flex" marginBottom>
            <TextField variant="outlined" placeholder="Matricul *" fullWidth />
          </Box>
          <Box>
            <KeyboardDatePicker
              fullWidth
              inputVariant="outlined"
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Anniversaire"
              value={new Date()}
              onChange={() => {}}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Box>
        </div>

        <Divider style={{ marginTop: 15, marginBottom: 15 }} />

        <div className={classes.section}>
          <Box display="flex" alignItems="center" marginBottom>
            <Avatar src={parentIcon} alt="student" />
            <Typography variant="h5" style={{ marginLeft: 10 }}>
              Information parent
            </Typography>
          </Box>

          <Box display="flex" marginBottom>
            <TextField variant="outlined" placeholder="pere *" fullWidth />
          </Box>

          <Box display="flex" marginBottom>
            <TextField variant="outlined" placeholder="mere *" fullWidth />
          </Box>

          <Box display="flex" marginBottom>
            <TextField variant="outlined" placeholder="tuteur *" fullWidth />
          </Box>

          <Box display="flex" marginBottom>
            <TextField
              variant="outlined"
              placeholder="adresse *"
              fullWidth
              style={{ marginRight: 5 }}
            />
            <TextField variant="outlined" placeholder="contacte *" fullWidth />
          </Box>
        </div>

        <Divider style={{ marginTop: 15, marginBottom: 15 }} />

        <div className={classes.section}>
          <Box display="flex" alignItems="center" marginBottom>
            <Avatar src={infoIcon} alt="student" />
            <Typography variant="h5" style={{ marginLeft: 10 }}>
              Information generale
            </Typography>
          </Box>

          <Box display="flex" marginBottom>
            <TextField variant="outlined" placeholder="nom *" fullWidth />
          </Box>

          <Box display="flex" marginBottom>
            <TextField variant="outlined" placeholder="prenom *" fullWidth />
          </Box>

          <Box display="flex" marginBottom>
            <TextField
              variant="outlined"
              placeholder="contacte *"
              fullWidth
              style={{ marginRight: 5 }}
            />
            <TextField variant="outlined" placeholder="adresse *" fullWidth />
          </Box>
        </div>

        <Box display="flex" justifyContent="flex-end">
          <Button
            disableFocusRipple={true}
            variant="contained"
            color="primary"
            size="small"
            className={classes.submitBtn}
            onClick={() => {
              //
            }}
          >
            Enregistrer
            {false && (
              <CircularProgress
                size={20}
                className={classes.circularProgress}
              />
            )}
          </Button>
        </Box>
      </Paper>
    </form>
  );
};

export default EleveForm;
