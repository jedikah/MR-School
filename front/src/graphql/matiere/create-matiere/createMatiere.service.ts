import { useMutation } from "@apollo/client";

import {
  useCreateMatiereState,
  useCreateMatiereDispatch,
} from "./createMatiere.consumer";
import { CreateMatiereData, CREATE_MATIERE } from "./createMatiere.gql";
import { MutationCreateMatiereArgs } from "../../types";
import {
  CreateMatiereState,
  CreateMatiereDispatch,
} from "./createMatiere.context";

export interface UseCreateMatiere {
  createMatiereState: CreateMatiereState;
  createMatiereDispatch: CreateMatiereDispatch;
  loadingCreateMatiere: boolean;
  submitCreateMatiere: () => void;
}

export const useCreateMatiere = (): UseCreateMatiere => {
  const createMatiereState = useCreateMatiereState();
  const createMatiereDispatch = useCreateMatiereDispatch();

  const [createMatiere, { loading: loadingCreateMatiere }] = useMutation<
    CreateMatiereData,
    MutationCreateMatiereArgs
  >(CREATE_MATIERE, {
    variables: createMatiereState.variables,
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const submitCreateMatiere = (): void => {
    if (createMatiereState.variables.designation !== "") {
      createMatiere({ variables: createMatiereState.variables });
    }
  };

  return {
    createMatiereState,
    createMatiereDispatch,
    loadingCreateMatiere,
    submitCreateMatiere,
  };
};
