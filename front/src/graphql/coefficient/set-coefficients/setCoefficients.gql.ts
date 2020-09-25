import { gql } from "@apollo/client";

import { SetCoefficientsResult } from "../../types";
import { COEFFICIENT_TABLE_FRAG } from "../../fragments";

export interface SetCoefficientsData {
  setCoefficients: SetCoefficientsResult;
}

export const SET_COEFFICIENTS = gql`
  mutation SetCoefficients($idCoefficient: IdCoefficient!) {
    setCoefficients(idCoefficient: $idCoefficient) {
      matiereId
      coefficientTable {
        ...CoefficientTableFrag
      }
    }
  }
  ${COEFFICIENT_TABLE_FRAG}
`;
