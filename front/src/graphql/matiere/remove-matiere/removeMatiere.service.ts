import { useMutation, useApolloClient } from "@apollo/client";
import { RemoveMatiereData, REMOVE_MATIERE } from "./removeMatiere.gql";
import { MutationRemoveMatiereArgs } from "../../types";
import { MatieresData, MATIERES } from "../matieres/matieres.gql";
import { useMatiereState, useMatiereDispatch } from "../matiere.consumer";
import { MatiereState, MatiereDispatch } from "../matiere.context";
import { useSnackbar } from "notistack";
import produce from "immer";

export interface UseRemoveMatiere {
  matiereState: MatiereState;
  matiereDispatch: MatiereDispatch;
  loadingRemoveMatiere: boolean;
  submitRemoveMatiere: () => void;
}

export const useRemoveMatiere = () => {
  const apollo = useApolloClient();
  const matiereState = useMatiereState();
  const matiereDispatch = useMatiereDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [removeMatiere, { loading: loadingRemoveMatiere }] = useMutation<
    RemoveMatiereData,
    MutationRemoveMatiereArgs
  >(REMOVE_MATIERE, {
    onCompleted: (data) => {
      enqueueSnackbar("La matiere a bien ete supprimer", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });

      const matieres = apollo.cache.readQuery<MatieresData>({
        query: MATIERES,
      });
      if (matieres) {
        apollo.cache.writeQuery<MatieresData>({
          query: MATIERES,
          data: produce(matieres, (draft) => {
            draft.matieres.splice(
              draft.matieres.findIndex(
                (m) => parseInt(m.id) === matiereState.removeMatiereVariables.id
              ),
              1
            );
          }),
        });
      }

      matiereDispatch({ type: "SET_TO_DELETE_MATIERE", idMatiere: 0 });
    },
  });

  const submitRemoveMatiere = () => {
    if (matiereState.removeMatiereVariables.id !== 0) {
      removeMatiere({ variables: matiereState.removeMatiereVariables });
    }
  };

  return {
    matiereState,
    matiereDispatch,
    loadingRemoveMatiere,
    submitRemoveMatiere,
  };
};
