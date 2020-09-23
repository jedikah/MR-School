import { gql } from "@apollo/client";
import { ELEVE_FRAG, UTILISATEUR_FRAG, PARENT_FRAG } from "../../fragments";
import { Eleve } from "../../types";

export interface EleveData {
  eleve: Eleve;
}

export const ELEVE = gql`
  query Eleve($matriculeInput: InputMatriculeEleve!) {
    eleve(matriculeInput: $matriculeInput) {
      ...EleveFrag
      utilisateur {
        ...UtilisateurFrag
      }
      parent {
        ...ParentFrag
      }
    }
  }

  ${ELEVE_FRAG}
  ${UTILISATEUR_FRAG}
  ${PARENT_FRAG}
`;
