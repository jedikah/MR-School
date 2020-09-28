import * as React from "react";
import produce from "immer";
import { useMutation, useApolloClient } from "@apollo/client";

import { MutationSetEnseignerArgs } from "../../types";
import { SET_ENSEIGNER, SetEnseignerData } from "./setEnseigner.gql";
import { MatieresData, MATIERES } from "../../matiere/matieres/matieres.gql";

export const useSetEnseigner = (variables: MutationSetEnseignerArgs) => {
  const apollo = useApolloClient();
  const [open, setOpen] = React.useState(false);
  const [setEnseigner, { loading: loadingSetEnseigner }] = useMutation<
    SetEnseignerData,
    MutationSetEnseignerArgs
  >(SET_ENSEIGNER, {
    onCompleted: (data) => {
      const prevMatieres = apollo.cache.readQuery<MatieresData>({
        query: MATIERES,
      });
      if (prevMatieres) {
        apollo.cache.writeQuery<MatieresData>({
          query: MATIERES,
          data: produce(prevMatieres, (draft) => {
            draft.matieres.forEach((m) => {
              if (m.id === data.setEnseigner.matiere.id) {
                m.enseignerTable = data.setEnseigner.enseignerTable;
              }
            });
          }),
        });
      }
      handleClose();
    },
  });

  const submitSetEnseigner = () => {
    setEnseigner({ variables });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    loadingSetEnseigner,
    submitSetEnseigner,
    handleClickOpen,
    handleClose,
    open,
  };
};
