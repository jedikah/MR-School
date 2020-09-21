import { useMutation } from "@apollo/client";

import {
  useCreateMatiereState,
  useCreateMatiereDispatch,
} from "./createMatiere.consumer";
import { CreateMatiereData, CREATE_MATIERE } from "./createMatiere.gql";
import { MutationCreateMatiereArgs, Matiere } from "../../types";
import {
  CreateMatiereState,
  CreateMatiereDispatch,
} from "./createMatiere.context";
import { MatieresData } from "../matieres/matieres.gql";

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
    update: (cache, { data }) => {
      const matieresKey: keyof MatieresData = "matieres";
      if (data) {
        cache.modify({
          fields: {
            [matieresKey](existingMatieres: Matiere[]) {
              return [data.createMatiere, ...existingMatieres];
            },
          },
        });
      }
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
