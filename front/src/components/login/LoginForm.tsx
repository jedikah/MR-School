import * as React from 'react';
import {
  FormControl,
  TextField,
  makeStyles,
  Typography,
  Button,
  InputAdornment,
  IconButton,
  Input,
  InputLabel
} from '@material-ui/core';

import logo from '../../assets/logo.png';
import { LoginInput } from '../../graphql/types';
import { UseLogin } from '../../graphql/auth/login/login.service';
import FaceIcon from '@material-ui/icons/Face';
import { mrStyle } from '../../style/globaleStyle';
import LockIcon from '@material-ui/icons/Lock';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  componentStyle: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    width: 100,
    height: 60
  },
  Heading: {
    position: 'relative',
    top: 50,
    paddingBottom: theme.spacing(5),
    fontWeight: 'bold',
    margin: theme.spacing(7)
  },
  form: {
    margin: theme.spacing(0),
    paddingRight: theme.spacing(7),
    paddingLeft: theme.spacing(7)
  },
  field: {
    marginBottom: theme.spacing(6)
  },
  button: {
    position: 'absolute',
    borderRadius: '50px 50px 50px 50px',
    width: 200,
    right: theme.spacing(7)
  },
  foot: {
    margin: theme.spacing(7),
    position: 'absolute',
    bottom: 0
  }
}));

export const LoginForm: React.FC<UseLogin> = ({
  submitLogin,
  loginInput,
  loginLoading,
  handleChangeLoginForm
}) => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.componentStyle}>
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
          variant="outlined"
          className={classes.field}
          error={false}
          placeholder="Contact"
          value={loginInput.contact}
          onChange={(e) => handleChangeLoginForm('contact', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaceIcon style={{ color: mrStyle.iconColor }} />
              </InputAdornment>
            )
          }}
        />
      </FormControl>

      <FormControl required size="small" className={classes.form}>
        <TextField
          variant="outlined"
          className={classes.field}
          error={false}
          placeholder="Mot de passe"
          value={loginInput.motDePasse}
          onChange={(e) => handleChangeLoginForm('motDePasse', e.target.value)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon style={{ color: mrStyle.iconColor }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </FormControl>

      <FormControl className={[classes.form].join(' ')}>
        <Button
          disableFocusRipple={true}
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          onClick={() => submitLogin()}
        >
          Se connecter
        </Button>
      </FormControl>

      <img className={classes.logo} src={logo} alt="MisRol_logo" />
      <div className={classes.foot}>
        <p>Mot de passe oublier ?</p>
        <p>Veuilliez vous renseigner au près du responssable.</p>
      </div>
    </div>
  );
};
