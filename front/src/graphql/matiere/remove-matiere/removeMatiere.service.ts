import { useMutation } from "@apollo/client";
import { RemoveMatiereData, REMOVE_MATIERE } from "./removeMatiere.gql";
import { MutationRemoveMatiereArgs } from "../../types";
import { MatieresData, MATIERES } from "../matieres/matieres.gql";
import { useMatiereState, useMatiereDispatch } from "../matiere.consumer";
import { MatiereState, MatiereDispatch } from "../matiere.context";
import produce from "immer";
import { useSnackbar } from "notistack";

export interface UseRemoveMatiere {
  matiereState: MatiereState;
  matiereDispatch: MatiereDispatch;
  loadingRemoveMatiere: boolean;
  submitRemoveMatiere: () => void;
}

export const useRemoveMatiere = () => {
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
          horizontal: "right",
        },
      });
      matiereDispatch({ type: "SET_TO_DELETE_MATIERE", idMatiere: 0 });
    },

    update: (cache, { data }) => {
      if (data && data.removeMatiere) {
        const matieres = cache.readQuery<MatieresData>({
          query: MATIERES,
        });
        if (matieres) {
          cache.writeQuery<MatieresData>({
            query: MATIERES,
            data: produce(matieres, (draft) => {
              draft.matieres.splice(
                draft.matieres.findIndex(
                  (m) =>
                    parseInt(m.id) === matiereState.removeMatiereVariables.id
                ),
                1
              );
            }),
          });
        }
      }
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
