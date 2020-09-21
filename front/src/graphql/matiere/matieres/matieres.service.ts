import { useQuery } from "@apollo/client";
import { MatieresData, MATIERES } from "./matieres.gql";

export interface UseMatieres {
  matieresData: MatieresData | undefined;
  loadingMatiere: boolean;
}

export const useMatieres = (): UseMatieres => {
  const { data, loading: loadingMatiere } = useQuery<MatieresData>(MATIERES);
  return {
    matieresData: data,
    loadingMatiere,
  };
};
