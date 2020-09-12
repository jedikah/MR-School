import * as React from 'react';
import {
  FormControl,
  TextField,
  makeStyles,
  Typography,
  Button
} from '@material-ui/core';

import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  componentStyle: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    width: 100,
    height: 60,
    position: 'absolute'
  },
  Heading: {
    position: 'relative',
    top: 100,
    fontWeight: 'bold',
    margin: theme.spacing(7)
  },
  form: {
    margin: theme.spacing(7),
    top: 100
  },
  field: {
    marginBottom: theme.spacing(6)
  },
  button: {
    position: 'absolute',
    color: 'white',
    backgroundColor: '#6a353d',
    borderRadius: '50px 50px 50px 50px',
    width: 200,
    right: 25
  },
  foot: {
    margin: theme.spacing(7),
    position: 'absolute',
    bottom: 0
  }
}));

export const LoginForm: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.componentStyle}>
      <img className={classes.logo} src={logo} alt="MisRol_logo" />
      <Typography
        className={classes.Heading}
        color="textSecondary"
        variant="h4"
        component="h1"
      >
        AUTHENTIFICATION
      </Typography>
      <FormControl required size="small" className={classes.form}>
        <TextField
          className={classes.field}
          error={false}
          id="id"
          label="Identifiant"
          defaultValue="Hello World"
        />

        <TextField
          className={classes.field}
          error={false}
          id="id"
          label="Identifiant"
          defaultValue="Hello World"
        />

        <div className={classes.field}>
          <Button size="small" className={classes.button}>
            Se connecter
          </Button>
        </div>
      </FormControl>
      <div className={classes.foot}>
        <p>Mot de passe oublier ?</p>
        <p>Veuilliez vous renseigner au près du responssable.</p>
      </div>
    </div>
  );
};
