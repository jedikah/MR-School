import { gql } from '@apollo/client';

export const PAGINATION_META_FRAG = gql`
  fragment PaginationMetaFrag on PaginationMeta {
    currentPage
    itemCount
    itemsPerPage
    totalItems
    totalPages
  }
`;

export const ELEVE_FRAG = gql`
  fragment EleveFrag on Eleve {
    matricule
    naissance
    sexe
  }
`;

export const UTILISATEUR_FRAG = gql`
  fragment UtilisateurFrag on Utilisateur {
    prenom
  }
`;

export const PARENT_FRAG = gql`
  fragment ParentFrag on Parent {
    id
    adresse
    contact
    mere
    pere
    tuteur
  }
`;

export const MATIERE_FRAG = gql`
  fragment MatiereFrag on Matiere {
    id
    designation
  }
`;

export const FONCTION_FRAG = gql`
  fragment FonctionFrag on Fonction {
    id
    designation
  }
`;
