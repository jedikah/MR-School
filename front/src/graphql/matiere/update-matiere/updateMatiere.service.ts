import { useMutation } from "@apollo/client";

import { UpdateMatiereData, UPDATE_MATIERE } from "./updateMatiere.gql";
import { MutationUpdateMatiereArgs } from "../../types";
import { useMatiereDispatch, useMatiereState } from "../matiere.consumer";
import { MatiereState, MatiereDispatch } from "../matiere.context";

export interface UseUpdateMatiere {
  matiereState: MatiereState;
  matiereDispatch: MatiereDispatch;
  submitUpdateMatiere: () => void;
  loadingUpdateMatiere: boolean;
}

export const useUpdateMatiere = () => {
  const matiereState = useMatiereState();
  const matiereDispatch = useMatiereDispatch();
  const [updateMatiere, { loading: loadingUpdateMatiere }] = useMutation<
    UpdateMatiereData,
    MutationUpdateMatiereArgs
  >(UPDATE_MATIERE);

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
