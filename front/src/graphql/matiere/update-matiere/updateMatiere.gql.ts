import { gql } from "@apollo/client";

import { Matiere } from "../../types";
import { MATIERE_FRAG } from "../../fragments";

export interface UpdateMatiereData {
  updateMatiere: Matiere;
}

export const UPDATE_MATIERE = gql`
  mutation UpdateMatiere($updateMatiereInput: UpdateMatiereInput!) {
    updateMatiere(updateMatiereInput: $updateMatiereInput) {
      ...MatiereFrag
    }
  }
  ${MATIERE_FRAG}
`;
