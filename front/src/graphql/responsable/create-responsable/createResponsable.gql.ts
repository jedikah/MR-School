import { gql } from '@apollo/client';
import { UTILISATEUR_FRAG, FONCTION_FRAG } from '../../fragments';
import { Responsable } from '../../types';

export interface CreatResponsableData {
  createResponsable: Responsable;
}

export const CREATE_RESPONSABLE = gql`
  mutation CreateResponsable($input: CreateResponsableInput!) {
    createResponsable(input: $input) {
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
