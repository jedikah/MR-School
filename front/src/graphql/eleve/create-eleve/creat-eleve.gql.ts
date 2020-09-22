import { gql } from "@apollo/client";
import { ELEVE_FRAG, UTILISATEUR_FRAG, PARENT_FRAG } from "../../fragments";
import { Eleve } from "../../types";

export interface CreatEleveData {
  createEleve: Eleve;
}

export const CREATE_ELEVE = gql`
  mutation CreateEleve($input: CreateEleveInput!) {
    createEleve(input: $input) {
      ...EleveFrag
      parent {
        ...ParentFrag
      }
      utilisateur {
        ...UtilisateurFrag
      }
    }
  }
  ${ELEVE_FRAG}
  ${PARENT_FRAG}
  ${UTILISATEUR_FRAG}
`;
