import { gql } from "@apollo/client";
import { SetEnseignerResult } from "../../types";
import { MATIERE_FRAG, ENSEIGNER_TABLE_FRAG } from "../../fragments";

export interface SetEnseignerData {
  setEnseigner: SetEnseignerResult;
}

export const SET_ENSEIGNER = gql`
  mutation SetEnseigner($setEnseignerInput: SetEnseignerInput!) {
    setEnseigner(setEnseignerInput: $setEnseignerInput) {
      matiere {
        ...MatiereFrag
      }
      enseignerTable {
        ...EnseignerTableFrag
      }
    }
  }
  ${MATIERE_FRAG}
  ${ENSEIGNER_TABLE_FRAG}
`;
