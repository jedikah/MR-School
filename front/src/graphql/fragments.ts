import { gql } from "@apollo/client";

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
    id
    adresse
    contact
    nom
    photo
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

export const CLASSE_FRAG = gql`
  fragment ClasseFrag on Classe {
    id
    designation
  }
`;

export const COEFFICIENT_TABLE_FRAG = gql`
  fragment CoefficientTableFrag on CoefficientTable {
    classe {
      ...ClasseFrag
    }
    coefficient
    status
  }
  ${CLASSE_FRAG}
`;
