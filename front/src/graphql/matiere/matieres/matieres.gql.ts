import { gql } from "@apollo/client";

import { Matiere } from "../../types";
import {
  MATIERE_FRAG,
  COEFFICIENT_TABLE_FRAG,
  ENSEIGNER_TABLE_FRAG,
} from "../../fragments";

export interface MatieresData {
  matieres: Matiere[];
}

export const MATIERES = gql`
  query {
    matieres {
      ...MatiereFrag
      coefficientTable {
        ...CoefficientTableFrag
      }
      enseignerTable {
        ...EnseignerTableFrag
      }
    }
  }
  ${MATIERE_FRAG}
  ${COEFFICIENT_TABLE_FRAG}
  ${ENSEIGNER_TABLE_FRAG}
`;
