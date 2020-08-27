import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { items, isOpen } from './items';
import {Avatar, Box, Collapse, Typography} from "@material-ui/core";
import avatarUser from "../../assets/50.jpg";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        drawer: {
            flexShrink: 0,
        },
        paper: {
            backgroundColor: '#1C0808',
            color: '#9e9e9e'
        },
        list: {
            textAlign: 'center'
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        avatar: {
            width: theme.spacing(15),
            height: theme.spacing(15),
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(2)
        },
    });
});

const SwipeableTemporaryDrawer: React.FC = () => {

    const styles = useStyles();
    const [state, setState] = React.useState(isOpen);

    const expandClick = (index: number) => {
        setState({
            ...state,
            [index]: !state[index]
        })
    }

    return <Drawer
        className={styles.drawer}
        classes={{ paper: styles.paper }}
        variant="persistent"
        anchor="left"
        open={true}
    >
        <Box display="flex" justifyContent="center" flexDirection="column">
            <Box mx="auto">
                <Avatar alt="MR-SCHOOL User"  src={avatarUser} className={styles.avatar} />
            </Box>
            <Box mx="auto" borderBottom={1}>
                <Typography variant="h5" component="h5">
                    John Connor XYT
                </Typography>
            </Box>
        </Box>

        <List
            component="nav"
        >
            {
                items.map((item, index) =>
                    <div key={index}>
                        <ListItem button onClick={() => expandClick(index)} className={styles.list}>
                            <ListItemText primary={item.label} />
                            {(item.children.length > 0) ? (state[index]? <ExpandLess /> : <ExpandMore />) : ''}
                        </ListItem>
                        {
                            item.children.map((child, num) =>
                                <Collapse in={state[index]} timeout="auto" unmountOnExit key={num}>
                                    <ListItem button className={styles.nested}>
                                        <ListItemText primary={child.label} />
                                    </ListItem>
                                </Collapse>
                            )
                        }
                    </div>
                )
            }
        </List>
    </Drawer>;
}

export default SwipeableTemporaryDrawer;

