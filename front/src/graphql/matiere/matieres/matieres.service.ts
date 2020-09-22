import { useQuery } from "@apollo/client";

import { MatieresData, MATIERES } from "./matieres.gql";
import { useMatiereDispatch, useMatiereState } from "../matiere.consumer";
import { MatiereDispatch, MatiereState } from "../matiere.context";

export interface UseMatieres {
  matieresData: MatieresData | undefined;
  loadingMatiere: boolean;
  matiereState: MatiereState;
  matiereDispatch: MatiereDispatch;
}

export const useMatieres = (): UseMatieres => {
  const matiereState = useMatiereState();
  const matiereDispatch = useMatiereDispatch();
  const { data, loading: loadingMatiere } = useQuery<MatieresData>(MATIERES);
  return {
    matieresData: data,
    loadingMatiere,
    matiereState,
    matiereDispatch,
  };
};
