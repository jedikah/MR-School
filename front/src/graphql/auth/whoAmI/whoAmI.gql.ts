import { gql } from "@apollo/client";
import { Utilisateur } from "../../types";

export interface WhoAmIData {
  WhoAmI: Utilisateur;
}

export const WHO_AM_I = gql`
  query {
    WhoAmI {
      id
    }
  }
`;
