import { Utilisateur, EleveInput, Parent } from "../../../../../graphql/types";

export interface Data {
  photo?: string | null;
  matricule: string;
  nom: string;
  prenom: string;
  utilisateur: Utilisateur[];
  eleve: EleveInput[];
  parent: Parent[];
}
