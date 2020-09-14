import * as React from 'react';
import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';

import avatarUser from '../../assets/50.jpg';

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginLeft: 10,
    width: theme.spacing(5),
    height: theme.spacing(5)
  },

  username: {
    fontWeight: 'bold',
    color: '#848484'
  }
}));

const Head: React.FC = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box display="flex" alignItems="center">
        <Typography variant="h6" className={classes.username}>
          {'John Doe'}
        </Typography>
        <Avatar
          alt={'user-avatar'}
          src={avatarUser}
          className={classes.avatar}
        />
      </Box>
    </Box>
  );
};

export default Head;
