import { gql } from "@apollo/client";

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
    nom
    contact
    motDePasse
    photo
    prenom
    adresse
  }
`;
export const PARENT_FRAG = gql`
  fragment ParentFrag on Parent {
    tuteur
    adresse
    contact
    id
    mere
    pere
    tuteur
  }
`;
