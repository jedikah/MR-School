import { gql } from "@apollo/client";
import { ELEVE_FRAG, UTILISATEUR_FRAG, PARENT_FRAG } from "../../fragments";
import { Eleve } from "../../types";

export interface CreatEleveData {
  createEleve: Eleve;
}

export const CREATE_ELEVE = gql`
  mutation CreateEleve($input: EleveInput!) {
    createEleve(input: $input) {
      ...EleveFrag
      utilisateur {
        ...UtilisateurFrag
      }
      parent {
        ...ParentFrag
      }
    }
  }
  ${PARENT_FRAG}
  ${ELEVE_FRAG}
  ${UTILISATEUR_FRAG}
`;
