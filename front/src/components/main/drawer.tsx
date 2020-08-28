import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { items, isOpen } from './items';
import { Avatar, Box, Collapse, Typography } from '@material-ui/core';
import avatarUser from '../../assets/50.jpg';
import { ListItemLink } from './listItemLink';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    drawer: {
      flexShrink: 0,
      width: 220
    },
    paper: {
      background: 'linear-gradient(90turn, #110505, #240B0B)',
      color: '#9e9e9e'
    },
    list: {
      textAlign: 'center'
    },
    nested: {
      paddingLeft: theme.spacing(5)
    },
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(2)
    }
  });
});

const SwipeableTemporaryDrawer: React.FC = () => {
  const styles = useStyles();
  const [state, setState] = React.useState(isOpen);

  const expandClick = (index: number) => {
    setState({
      ...state,
      [index]: !state[index]
    });
  };

  return (
    <Drawer
      className={styles.drawer}
      classes={{ paper: styles.paper }}
      variant="permanent"
      anchor="left"
      open={true}
    >
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box mx="auto">
          <Avatar
            alt="MR-SCHOOL User"
            src={avatarUser}
            className={styles.avatar}
          />
        </Box>
        <Box mx="auto" borderBottom={1}>
          <Typography variant="h5" component="h5">
            John Connor XYT
          </Typography>
        </Box>
      </Box>

      <List component="nav">
        {items.map((item, index) => (
          <div key={index}>
            <ListItemLink
              expandClick={() => expandClick(index)}
              length={item.children.length}
              open={state[index]}
              primary={item.label}
              className={styles.list}
              to={item.path}
            />
            {item.children.map((child, num) => (
              <Collapse
                in={state[index]}
                timeout="auto"
                unmountOnExit
                key={num}
              >
                <ListItem button className={styles.nested}>
                  <ListItemText primary={child.label} />
                </ListItem>
              </Collapse>
            ))}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default SwipeableTemporaryDrawer;
