import { useSnackbar } from "notistack";
import { useMutation } from "@apollo/client";

import { useMatiereDispatch, useMatiereState } from "../matiere.consumer";
import { CreateMatiereData, CREATE_MATIERE } from "./createMatiere.gql";
import { MutationCreateMatiereArgs, Matiere } from "../../types";
import { MatiereDispatch, MatiereState } from "../matiere.context";
import { MatieresData } from "../matieres/matieres.gql";

export interface UseCreateMatiere {
  matiereState: MatiereState;
  matiereDispatch: MatiereDispatch;
  loadingCreateMatiere: boolean;
  submitCreateMatiere: () => void;
}

export const useCreateMatiere = (): UseCreateMatiere => {
  const matiereState = useMatiereState();
  const matiereDispatch = useMatiereDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [createMatiere, { loading: loadingCreateMatiere }] = useMutation<
    CreateMatiereData,
    MutationCreateMatiereArgs
  >(CREATE_MATIERE, {
    onCompleted: (data) => {
      if (data.createMatiere.__typename === "Matiere") {
        enqueueSnackbar(
          `La matiere ${data.createMatiere.designation} a bien ete creer`,
          {
            variant: "success",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          }
        );
        matiereDispatch({ type: "HANDLE_CHANGE", value: "" });
      }

      if (data.createMatiere.__typename === "CreateMatiereError") {
        enqueueSnackbar(data.createMatiere.designationAlreadyExist, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      }
    },

    update: (cache, { data }) => {
      const matieresKey: keyof MatieresData = "matieres";
      if (data && data.createMatiere.__typename === "Matiere") {
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
    if (matiereState.createMatiereVariables.designation !== "") {
      createMatiere({ variables: matiereState.createMatiereVariables });
    }
  };

  return {
    matiereState,
    matiereDispatch,
    loadingCreateMatiere,
    submitCreateMatiere,
  };
};
