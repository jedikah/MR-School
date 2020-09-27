import { useQuery } from "@apollo/client";

import { ProfesseursData, PROFESSEURS } from "./professeurs.gql";
import { Responsable } from "../../types";

export interface UseProfesseurs {
  professeurs: Responsable[];
}

export const useProfesseurs = (): UseProfesseurs => {
  const { data } = useQuery<ProfesseursData>(PROFESSEURS);
  return {
    professeurs: data ? data.professeurs : [],
  };
};
