import { useSnackbar } from "notistack";
import { useMutation, useApolloClient } from "@apollo/client";

import { useMatiereDispatch, useMatiereState } from "../matiere.consumer";
import { CreateMatiereData, CREATE_MATIERE } from "./createMatiere.gql";
import { MutationCreateMatiereArgs } from "../../types";
import { MatiereDispatch, MatiereState } from "../matiere.context";
import { MatieresData, MATIERES } from "../matieres/matieres.gql";
import produce from "immer";

export interface UseCreateMatiere {
  matiereState: MatiereState;
  matiereDispatch: MatiereDispatch;
  loadingCreateMatiere: boolean;
  submitCreateMatiere: () => void;
}

export const useCreateMatiere = (): UseCreateMatiere => {
  const apollo = useApolloClient();
  const matiereState = useMatiereState();
  const matiereDispatch = useMatiereDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [createMatiere, { loading: loadingCreateMatiere }] = useMutation<
    CreateMatiereData,
    MutationCreateMatiereArgs
  >(CREATE_MATIERE, {
    onCompleted: (data) => {
      if (data.createMatiere.__typename === "Matiere") {
        const prevMatieres = apollo.cache.readQuery<MatieresData>({
          query: MATIERES,
        });
        if (prevMatieres) {
          apollo.cache.writeQuery<MatieresData>({
            query: MATIERES,
            data: produce(prevMatieres, (draft) => {
              data.createMatiere.__typename === "Matiere" &&
                draft.matieres.unshift(data.createMatiere);
            }),
          });
        }

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

        matiereDispatch({
          type: "HANDLE_CHANGE_CREATE_MATIERE_VARIABLES",
          value: "",
        });
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
