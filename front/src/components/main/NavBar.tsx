import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  fade
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, Avatar, Box } from '@material-ui/core';
import classroom from '../../assets/classroom.png';
import calendar from '../../assets/calendar.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { width: '100%' },
    title: {
      flexGrow: 1
    },
    spacing: {
      marginLeft: 10
    },
    avatar: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    toolbar: {
      display: 'flex'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch'
        }
      }
    }
  })
);

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar variant="dense">
          <Box display="flex" alignItems="center" className={classes.title}>
            <Avatar
              variant="square"
              sizes="small"
              alt={'classroom'}
              src={classroom}
              className={classes.avatar}
            />
            <span className={classes.spacing}>Classes</span>

            <Avatar
              variant="square"
              sizes="small"
              alt={'calendar'}
              src={calendar}
              className={classes.avatar}
            />
            <span className={classes.spacing}>Année scolaire</span>

            <Avatar
              variant="square"
              sizes="small"
              alt={'calendar'}
              src={calendar}
              className={classes.avatar}
            />
            <span className={classes.spacing}>Année scolaire</span>
          </Box>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
