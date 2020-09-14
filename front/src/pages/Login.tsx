import * as React from 'react';

import LoginFormCtn from '../components/login/LoginForm.ctn';
import { makeStyles, Typography } from '@material-ui/core';
import books from '../assets/books.jpg';

const useStyles = makeStyles((theme) => ({
  pageStyle: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row'
  },
  leftDiv: {
    width: '35%',
    height: '100%'
  },
  rightDiv: {
    width: '65%',
    height: '100%',
    backgroundImage: `url(${books})`,
    backgroundPosition: 'center',
    backgroundSize: '135% '
  },
  blackDiv: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5
  },
  rightDiv_P: {
    position: 'relative',
    color: 'white',
    fontSize: '4em',
    lineHeight: 2
  }
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();

  console.log(window.innerHeight);

  return (
    <div className={classes.pageStyle}>
      <div className={classes.leftDiv}>
        <LoginFormCtn />
      </div>
      <div className={classes.rightDiv}>
        <div className={classes.blackDiv}></div>
        <Typography
          className={classes.rightDiv_P}
          style={{ fontWeight: 'bold', paddingLeft: 175, top: 25 }}
        >
          BIENVENUE
        </Typography>
        <Typography
          className={classes.rightDiv_P}
          style={{ paddingLeft: 375 }}
          variant="body1"
        >
          MR-School
        </Typography>
      </div>
    </div>
  );
};

export default LoginPage;
