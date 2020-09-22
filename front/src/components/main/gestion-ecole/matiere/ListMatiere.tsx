import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Card,
  Typography,
  CardContent,
  Avatar,
  Box,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import DeleteIcon from "@material-ui/icons/Delete";

import emptyFolderIcon from "../../../../assets/001-empty-folder.png";
import { useMatieres } from "../../../../graphql/matiere/matieres/matieres.service";
import ConfirmationDialog from "../../../public-component/ConfirmationDialog";
import { Matiere, UpdateMatiereInput } from "../../../../graphql/types";
import { useRemoveMatiere } from "../../../../graphql/matiere/remove-matiere/removeMatiere.service";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
    height: "70vh",
    maxHeight: "70vh",
    overflow: "auto",
  },

  empytIcon: {
    width: 50,
    height: 50,
  },

  dialog: {
    width: "80%",
    maxHeight: 435,
  },
}));

const ListMatiere: React.FC = () => {
  const classes = useStyles();
  const {
    loadingMatiere,
    matieresData,
    matiereState,
    matiereDispatch,
  } = useMatieres();
  const { submitRemoveMatiere } = useRemoveMatiere();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    updateMatiereInput: UpdateMatiereInput
  ) => {
    matiereDispatch({ type: "SET_TO_UPDATE_MATIERE", updateMatiereInput });
  };

  const confirmMessage = () => {
    return matieresData
      ? `Confirmer la suppression de la matiere ${
          matieresData.matieres.find(
            (matiere) =>
              parseInt(matiere.id) === matiereState.removeMatiereVariables.id
          )?.designation || "..."
        }`
      : "";
  };

  const selectMatiereToDelete = (matiere: Matiere) => {
    matiereDispatch({
      type: "SET_TO_DELETE_MATIERE",
      idMatiere: parseInt(matiere.id),
    });
  };

  const confirmSuppressionDialogOpen =
    matiereState.removeMatiereVariables.id !== 0;

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
                divider
                key={matiere.id}
                button
                selected={
                  matiereState.updateMatiereVariables.updateMatiereInput.id ===
                  parseInt(matiere.id)
                }
                onClick={(event) =>
                  handleListItemClick(event, {
                    id: parseInt(matiere.id),
                    designation: matiere.designation,
                  })
                }
              >
                <ListItemIcon>
                  <Avatar>{matiere.designation[0].toUpperCase()}</Avatar>
                </ListItemIcon>
                <ListItemText primary={matiere.designation} />

                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => selectMatiereToDelete(matiere)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
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
      </CardContent>

      <ConfirmationDialog
        classes={{
          paper: classes.dialog,
        }}
        id="ringtone-menu"
        keepMounted
        open={confirmSuppressionDialogOpen}
        message={confirmMessage()}
        onOk={() => {
          submitRemoveMatiere();
        }}
        onCancel={() => {
          matiereDispatch({ type: "SET_TO_DELETE_MATIERE", idMatiere: 0 });
        }}
      />
    </Card>
  );
};

export default ListMatiere;
