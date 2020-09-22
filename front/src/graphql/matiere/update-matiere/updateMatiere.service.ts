import { useMutation } from "@apollo/client";

import { UpdateMatiereData, UPDATE_MATIERE } from "./updateMatiere.gql";
import { MutationUpdateMatiereArgs } from "../../types";
import { useMatiereDispatch, useMatiereState } from "../matiere.consumer";
import { MatiereState, MatiereDispatch } from "../matiere.context";
import { useSnackbar } from "notistack";

export interface UseUpdateMatiere {
  matiereState: MatiereState;
  matiereDispatch: MatiereDispatch;
  submitUpdateMatiere: () => void;
  loadingUpdateMatiere: boolean;
}

export const useUpdateMatiere = () => {
  const { enqueueSnackbar } = useSnackbar();
  const matiereState = useMatiereState();
  const matiereDispatch = useMatiereDispatch();
  const [updateMatiere, { loading: loadingUpdateMatiere }] = useMutation<
    UpdateMatiereData,
    MutationUpdateMatiereArgs
  >(UPDATE_MATIERE, {
    onCompleted: (data) => {
      enqueueSnackbar(
        `La matiere a bien ete modifier en ${data.updateMatiere.designation}`,
        {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        }
      );
    },

    onError: (error) => {
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    },
  });

  const submitUpdateMatiere = () => {
    const variables = matiereState.updateMatiereVariables;
    if (
      variables.updateMatiereInput.id !== 0 &&
      variables.updateMatiereInput.designation !== ""
    ) {
      updateMatiere({
        variables,
      });
    }
  };

  return {
    matiereState,
    matiereDispatch,
    submitUpdateMatiere,
    loadingUpdateMatiere,
  };
};
