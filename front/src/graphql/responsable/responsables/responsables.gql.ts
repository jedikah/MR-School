import { gql } from '@apollo/client';
import { UTILISATEUR_FRAG, FONCTION_FRAG } from '../../fragments';
import { Responsable } from '../../types';

export interface ResponsableData {
  responsables: Responsable[];
}

export const RESPONSABLES = gql`
  query Responsables($responsablesFilterInput: ResponsablesFilterInput!) {
    responsables(responsablesFilterInput: $responsablesFilterInput) {
      utilisateur {
        ...UtilisateurFrag
      }
      fonctions {
        ...FonctionFrag
      }
    }
  }
  ${UTILISATEUR_FRAG}
  ${FONCTION_FRAG}
`;
