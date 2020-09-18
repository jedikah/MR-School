import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  IconButton
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';

import studentIcon from '../../../assets/student.png';
import parentIcon from '../../../assets/001-family.png';
// import infoIcon from '../../../assets/001-information.png';
// import { closestIndexTo } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  },

  eleveAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: 10
  },

  section: {
    paddingLeft: 10,
    paddingRight: 10
  },

  submitBtn: {
    borderRadius: '50px 50px 50px 50px',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10
  },

  circularProgress: {
    color: '#fff',
    marginLeft: 15
  },

  marginBottom: {
    marginBottom: 8
  }
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
          <div style={{ position: 'relative' }}>
            <Avatar alt="eleve profile" className={classes.eleveAvatar} />
            <IconButton
              aria-label="edit photo eleve"
              style={{ position: 'absolute', left: -20, bottom: 0 }}
            >
              <EditIcon fontSize="large" />
            </IconButton>
          </div>
        </Box>

        <div className={classes.section}>
          <Box display="flex" alignItems="center">
            <Avatar src={studentIcon} alt="student" />
            <Typography variant="h6" style={{ marginLeft: 10 }}>
              Information eleve
            </Typography>
          </Box>

          <Box display="flex">
            <RadioGroup row aria-label="gender" name="gender1" value={'homme'}>
              <FormControlLabel
                value="garçon"
                control={<Radio />}
                label="Garçon"
              />
              <FormControlLabel
                value="fille"
                control={<Radio />}
                label="Fille"
              />
            </RadioGroup>
          </Box>
          <Box display="flex" className={classes.marginBottom}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="matricul *"
              fullWidth
            />
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="nom *"
              fullWidth
            />
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="prenom *"
              fullWidth
            />
          </Box>

          <Box display="flex">
            <TextField
              size="small"
              variant="outlined"
              placeholder="contacte *"
              fullWidth
              style={{ marginRight: 5 }}
            />
            <TextField
              size="small"
              variant="outlined"
              placeholder="adresse *"
              fullWidth
            />
          </Box>

          <Box>
            <KeyboardDatePicker
              size="small"
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
                'aria-label': 'change date'
              }}
            />
          </Box>
        </div>

        <Divider style={{ marginTop: 5, marginBottom: 5 }} />

        <div className={classes.section}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.marginBottom}
          >
            <Avatar src={parentIcon} alt="student" />
            <Typography variant="h6" style={{ marginLeft: 10 }}>
              Information parent
            </Typography>
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="pere *"
              fullWidth
            />
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="mere *"
              fullWidth
            />
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="tuteur *"
              fullWidth
            />
          </Box>

          <Box display="flex" className={classes.marginBottom}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="adresse *"
              fullWidth
              style={{ marginRight: 5 }}
            />
            <TextField
              size="small"
              variant="outlined"
              placeholder="contacte *"
              fullWidth
            />
          </Box>
        </div>

        <Box display="flex" justifyContent="flex-end">
          <Button
            disableFocusRipple={true}
            variant="contained"
            size="small"
            color="primary"
            className={clsx(classes.submitBtn)}
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
