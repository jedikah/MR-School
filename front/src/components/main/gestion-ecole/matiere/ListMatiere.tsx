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
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import ConfirmationDialog from "../../../public-component/ConfirmationDialog";
import SearchMatiere from "./SearchMatiere";
import emptyFolderIcon from "../../../../assets/001-empty-folder.png";
import { useMatieres } from "../../../../graphql/matiere/matieres/matieres.service";
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
    width: 75,
    height: 75,
    marginTop: 25,
  },

  dialog: {
    width: "80%",
    maxHeight: 435,
  },

  sortBtn: {
    position: "relative",
    left: 5,
    bottom: 9,
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

  const matieres = matieresData
    ? matiereState.searchMatieres
      ? matieresData.matieres.filter((m) =>
          m.designation.includes(matiereState.searchMatieres)
        )
      : matieresData.matieres
    : [];

  const confirmSuppressionDialogOpen =
    matiereState.removeMatiereVariables.id !== 0;

  return (
    <Card elevation={4} className={classes.container}>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box display="flex">
            <Typography gutterBottom variant="h5" component="h2">
              Liste matiere
            </Typography>
            <IconButton className={classes.sortBtn}>
              <ArrowUpwardIcon />
            </IconButton>
          </Box>
          <SearchMatiere
            input={matiereState.searchMatieres}
            onChange={(value) =>
              matiereDispatch({ type: "HANDLE_CHANGE_SEARCH_MATIERES", value })
            }
          />
        </Box>

        {loadingMatiere && (
          <Box>
            {Array.from(Array(5).keys()).map((n) => (
              <Skeleton key={n} variant="text" />
            ))}
          </Box>
        )}

        {!loadingMatiere && matieres.length > 0 && (
          <List component="nav" aria-label="main mailbox folders">
            {matieres.map((matiere) => (
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

        {matieres.length === 0 && (
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
