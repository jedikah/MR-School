import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Card,
  CardContent,
  Avatar,
  Box,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import DeleteIcon from "@material-ui/icons/Delete";

import ConfirmationDialog from "../../../public-component/ConfirmationDialog";
import HeadListMatiere from "./form-matiere/HeadListMatiere";
import { useMatieres } from "../../../../graphql/matiere/matieres/matieres.service";
import { Matiere, UpdateMatiereInput } from "../../../../graphql/types";
import { useRemoveMatiere } from "../../../../graphql/matiere/remove-matiere/removeMatiere.service";
import { filterOrderMatieres } from "./form-matiere/filterOrderMatieres";
import ListEmpty from "./ListEmpty";
import { useSetCoefficient } from "../../../../graphql/coefficient/set-coefficients/setCoefficients.service";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
    overflow: "scrool",
    flexGrow: 1,
    position: "relative",
  },

  innerContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "auto",
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
  const { coefficientDispatch } = useSetCoefficient();
  const { submitRemoveMatiere } = useRemoveMatiere();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    updateMatiereInput: UpdateMatiereInput
  ) => {
    matiereDispatch({ type: "SET_TO_UPDATE_MATIERE", updateMatiereInput });
    coefficientDispatch({ type: "CLEAR_SELECT_CLASSE_COEFFICIENT" });
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

  const matieres = filterOrderMatieres(
    matieresData ? matieresData.matieres : [],
    matiereState.searchMatieres,
    matiereState.sortMatieres
  );

  return (
    <Card elevation={4} className={classes.container}>
      <CardContent className={classes.innerContent}>
        <HeadListMatiere
          matiereState={matiereState}
          matiereDispatch={matiereDispatch}
        />

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

        {matieres.length === 0 && <ListEmpty />}
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
