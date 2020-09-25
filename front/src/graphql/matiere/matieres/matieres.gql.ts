import { gql } from "@apollo/client";

import { Matiere } from "../../types";
import { MATIERE_FRAG } from "../../fragments";

export interface MatieresData {
  matieres: Matiere[];
}

export const MATIERES = gql`
  query {
    matieres {
      ...MatiereFrag
      coefficientTable {
        classe {
          id
          designation
        }
        coefficient
        status
      }
    }
  }
  ${MATIERE_FRAG}
`;
