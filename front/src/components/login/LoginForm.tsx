import * as React from "react";
import {
  FormControl,
  TextField,
  makeStyles,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import logo from "../../assets/logo.png";
import { UseLogin } from "../../graphql/auth/login/login.service";
import FaceIcon from "@material-ui/icons/Face";
import { mrStyle } from "../../style/globaleStyle";
import LockIcon from "@material-ui/icons/Lock";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LoginInput } from "../../graphql/types";

const useStyles = makeStyles((theme) => ({
  componentStyle: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  Heading: {
    position: "relative",
    top: 50,
    paddingBottom: theme.spacing(5),
    fontWeight: "bolder",
    margin: theme.spacing(7),
    fontSize: "2em",
    color: mrStyle.iconColor,
  },
  form: {
    margin: theme.spacing(0),
    paddingRight: theme.spacing(7),
    paddingLeft: theme.spacing(7),
  },
  field: {
    marginBottom: theme.spacing(6),
  },
  button: {
    position: "absolute",
    borderRadius: "50px 50px 50px 50px",
    paddingLeft: 20,
    paddingRight: 20,
    right: theme.spacing(7),
  },
  foot: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "flex-end",
    margin: theme.spacing(7),
    bottom: 0,
  },

  circularProgress: {
    color: "#fff",
    marginLeft: 15,
  },
}));

export const LoginForm: React.FC<UseLogin> = ({
  submitLogin,
  loginInput,
  loginLoading,
  handleChangeLoginForm,
  loginFormError,
}) => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const isFormError = (key: keyof LoginInput) => {
    return loginFormError && loginInput[key] === "";
  };

  return (
    <div className={classes.componentStyle}>
      <Typography className={classes.Heading}>AUTHENTIFICATION</Typography>
      <FormControl required size="small" className={classes.form}>
        <TextField
          error={isFormError("contact")}
          variant="outlined"
          className={classes.field}
          placeholder="Contact"
          value={loginInput.contact}
          onChange={(e) => handleChangeLoginForm("contact", e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaceIcon style={{ color: mrStyle.iconColor }} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <FormControl required size="small" className={classes.form}>
        <TextField
          error={isFormError("motDePasse")}
          variant="outlined"
          className={classes.field}
          placeholder="Mot de passe"
          value={loginInput.motDePasse}
          onChange={(e) => handleChangeLoginForm("motDePasse", e.target.value)}
          type={showPassword ? "text" : "password"}
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
            ),
          }}
        />
      </FormControl>

      <FormControl className={[classes.form].join(" ")}>
        <Button
          disableFocusRipple={true}
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          onClick={() => submitLogin()}
        >
          Se connecter
          {loginLoading && (
            <CircularProgress size={20} className={classes.circularProgress} />
          )}
        </Button>
      </FormControl>

      <div className={classes.foot}>
        <img className={classes.logo} src={logo} alt="MisRol_logo" />
        <p>
          Mot de passe oublier ? <br /> Veuilliez vous renseigner au près du
          responssable.{" "}
        </p>
      </div>
    </div>
  );
};
