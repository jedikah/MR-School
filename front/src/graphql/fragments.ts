import { gql } from "@apollo/client";

export const ELEVE_FRAG = gql`
  fragment EleveFrag on Eleve {
    matricule
    naissance
    parent
    sexe
  }
`;
export const UTILISATEUR_FRAG = gql`
  fragment UtilisateurFrag on Utilisateur {
    nom
    prenom
    contact
    adresse
    photo
    motDePasse
  }
`;
export const PARENT_FRAG = gql`
  fragment ParentFrag on Parent {
    pere
    mere
    tuteur
    contact
    adresse
  }
`;
