import { gql } from "@apollo/client";
import { ElevesResult } from "../../types";
import {
  ELEVE_FRAG,
  UTILISATEUR_FRAG,
  PARENT_FRAG,
  PAGINATION_META_FRAG,
} from "../../fragments";

export interface ElevesData {
  eleves: ElevesResult;
}

export const ELEVES = gql`
  query Eleves(
    $paginationInput: PaginationInput!
    $elevesFilterInput: ElevesFilterInput!
  ) {
    eleves(
      paginationInput: $paginationInput
      elevesFilterInput: $elevesFilterInput
    ) {
      eleves {
        ...EleveFrag
        utilisateur {
          ...UtilisateurFrag
        }
        parent {
          ...ParentFrag
        }
      }

      paginationMeta {
        ...PaginationMetaFrag
      }
    }
  }

  ${ELEVE_FRAG}
  ${UTILISATEUR_FRAG}
  ${PARENT_FRAG}
  ${PAGINATION_META_FRAG}
`;
