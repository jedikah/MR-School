import { gql } from "@apollo/client";

import { CreateMatiereResult } from "../../types";
import { MATIERE_FRAG } from "../../fragments";

export interface CreateMatiereData {
  createMatiere: CreateMatiereResult;
}

export const CREATE_MATIERE = gql`
  mutation CreateMatiere($designation: String!) {
    createMatiere(designation: $designation) {
      __typename
      ... on Matiere {
        ...MatiereFrag
      }
      ... on CreateMatiereError {
        designationAlreadyExist
      }
    }
  }
  ${MATIERE_FRAG}
`;
