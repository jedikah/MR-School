import { gql } from "@apollo/client";

export interface RemoveMatiereData {
  removeMatiere: boolean;
}

export const REMOVE_MATIERE = gql`
  mutation RemoveMatiere($id: Float!) {
    removeMatiere(id: $id)
  }
`;
