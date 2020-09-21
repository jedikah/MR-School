import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Card, Typography, CardContent, Avatar, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import emptyFolderIcon from "../../../../assets/001-empty-folder.png";
import { useMatieres } from "../../../../graphql/matiere/matieres/matieres.service";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
  },

  empytIcon: {
    width: 50,
    height: 50,
  },
}));

const ListMatiere: React.FC = () => {
  const classes = useStyles();
  const { loadingMatiere, matieresData } = useMatieres();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Card elevation={4} className={classes.container}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Liste matiere
        </Typography>

        {loadingMatiere && (
          <Box>
            {Array.from(Array(5).keys()).map((n) => (
              <Skeleton key={n} variant="text" />
            ))}
          </Box>
        )}

        {!loadingMatiere && matieresData && matieresData.matieres.length > 0 && (
          <List component="nav" aria-label="main mailbox folders">
            {matieresData.matieres.map((matiere) => (
              <ListItem
                key={matiere.id}
                button
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <Avatar>{matiere.designation[0].toUpperCase()}</Avatar>
                </ListItemIcon>
                <ListItemText primary={matiere.designation} />
              </ListItem>
            ))}
          </List>
        )}

        {matieresData && matieresData.matieres.length === 0 && (
          <Box display="flex" justifyContent="center">
            <img
              className={classes.empytIcon}
              src={emptyFolderIcon}
              alt="empty icon"
            />
          </Box>
        )}
        <Divider />
      </CardContent>
    </Card>
  );
};

export default ListMatiere;
