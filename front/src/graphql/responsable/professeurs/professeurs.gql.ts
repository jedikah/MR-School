import { gql } from "@apollo/client";

import { Responsable } from "../../types";
import { UTILISATEUR_FRAG } from "../../fragments";

export interface ProfesseursData {
  professeurs: Responsable[];
}

export const PROFESSEURS = gql`
  query {
    professeurs {
      utilisateur {
        ...UtilisateurFrag
      }
    }
  }
  ${UTILISATEUR_FRAG}
`;
