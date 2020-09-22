import { useQuery } from "@apollo/client";

import { MatieresData, MATIERES } from "./matieres.gql";
import { useMatieresState, useMatieresDispatch } from "./matieres.consumer";
import { MatieresState, MatieresDispatch } from "./matieres.context";

export interface UseMatieres {
  matieresData: MatieresData | undefined;
  loadingMatiere: boolean;
  matieresState: MatieresState;
  matieresDispatch: MatieresDispatch;
}

export const useMatieres = (): UseMatieres => {
  const matieresState = useMatieresState();
  const matieresDispatch = useMatieresDispatch();
  const { data, loading: loadingMatiere } = useQuery<MatieresData>(MATIERES);
  return {
    matieresData: data,
    loadingMatiere,
    matieresState,
    matieresDispatch,
  };
};
