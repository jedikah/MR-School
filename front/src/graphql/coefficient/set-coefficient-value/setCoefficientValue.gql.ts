import { gql } from "@apollo/client";

export interface SetCoefficientValueData {
  setCoefficientValue: boolean;
}

export const SET_COEFFICIENT_VALUE = gql`
  mutation SetCoefficientValue($coefficientInput: CoefficientInput!) {
    setCoefficientValue(coefficientInput: $coefficientInput)
  }
`;
