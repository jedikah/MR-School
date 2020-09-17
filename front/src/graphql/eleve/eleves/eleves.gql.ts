import { gql } from "@apollo/client";
import { ElevesResult } from "../../types";

export interface ElevesData {
  eleves: ElevesResult;
}

export const ELEVES = gql`
  query Eleves($paginationInput: PaginationInput!) {
    eleves(paginationInput: $paginationInput) @connection(key: "eleves") {
    }
  }
`;
