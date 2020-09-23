import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AnneeScolaire = {
  __typename?: 'AnneeScolaire';
  debut: Scalars['DateTime'];
  fin: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type Classe = {
  __typename?: 'Classe';
  designation: Scalars['String'];
  id: Scalars['Float'];
  niveau: Niveau;
  sections: Array<Section>;
};

export type ClasseSection = {
  __typename?: 'ClasseSection';
  classe: Classe;
  section: Section;
};

export type Classification = {
  __typename?: 'Classification';
  anneeScolaire: AnneeScolaire;
  classe: Classe;
  eleve: Eleve;
  numAppel: Scalars['Float'];
  section: Section;
};

export type CreateAnneeScolaireInput = {
  debut: Scalars['DateTime'];
  fin: Scalars['DateTime'];
};

export type CreateClasseInput = {
  designation?: Maybe<Scalars['String']>;
  idNiveau: Scalars['Float'];
};

export type CreateClasseSectionInput = {
  idClasse: Scalars['Float'];
  idSection: Scalars['Float'];
};

export type CreateClassificationInput = {
  idAnneeScolaire: Scalars['Float'];
  idClasse: Scalars['Float'];
  idEleve: Scalars['Float'];
  idSection: Scalars['Float'];
  numAppel: Scalars['Float'];
};

export type CreateEleveInput = {
  eleve: EleveInput;
  parent: ParentInput;
  utilisateur: CreateUtilisateurInput_Eleve;
};

export type CreateMatiereError = {
  __typename?: 'CreateMatiereError';
  designationAlreadyExist: Scalars['String'];
};

export type CreateMatiereResult = CreateMatiereError | Matiere;

export type CreateNiveauInput = {
  designation?: Maybe<Scalars['String']>;
};

export type CreateParentInput = {
  adresse: Scalars['String'];
  contact: Scalars['String'];
  mere: Scalars['String'];
  pere: Scalars['String'];
  tuteur: Scalars['String'];
};

export type CreateResponsableInput = {
  fonction: FonctionInput;
  utilisateur: CreateUtilisateurInput_Responsable;
};

export type CreateSectionInput = {
  designation?: Maybe<Scalars['String']>;
};

export type CreateUtilisateurInput_Eleve = {
  adresse: Scalars['String'];
  contact: Scalars['String'];
  nom: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  prenom: Scalars['String'];
};

export type CreateUtilisateurInput_Responsable = {
  adresse: Scalars['String'];
  contact: Scalars['String'];
  nom: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  prenom: Scalars['String'];
};


export type Eleve = {
  __typename?: 'Eleve';
  matricule: Scalars['String'];
  naissance: Scalars['DateTime'];
  parent: Parent;
  sexe: Scalars['String'];
  utilisateur: Utilisateur;
};

export type EleveInput = {
  matricule: Scalars['String'];
  naissance: Scalars['DateTime'];
  sexe: Scalars['String'];
};

export type ElevesFilterInput = {
  matricule: Scalars['String'];
};

export type ElevesResult = {
  __typename?: 'ElevesResult';
  eleves: Array<Eleve>;
  paginationMeta: PaginationMeta;
};

export type Fonction = {
  __typename?: 'Fonction';
  designation: Scalars['String'];
  id: Scalars['ID'];
};

export type FonctionInput = {
  designation: Scalars['String'];
};

export type LoginInput = {
  contact: Scalars['String'];
  motDePasse: Scalars['String'];
};

export type Matiere = {
  __typename?: 'Matiere';
  designation: Scalars['String'];
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnneeScolaire: AnneeScolaire;
  createClasse: Classe;
  createClassification: Classification;
  createEleve: Eleve;
  createFonction: Fonction;
  createMatiere: CreateMatiereResult;
  createNiveau: Niveau;
  createOrUpdateSectionsOfClasse: ClasseSection;
  createParent: Parent;
  createResponsable: Responsable;
  createSection: Section;
  login: TokenDto;
  removeMatiere: Scalars['Boolean'];
  updateAnneeScolaire: AnneeScolaire;
  updateEleve: Eleve;
  updateMatiere: Matiere;
  updateSection: Section;
};


export type MutationCreateAnneeScolaireArgs = {
  createAnneeScolaireInput: CreateAnneeScolaireInput;
};


export type MutationCreateClasseArgs = {
  createClasseInput: CreateClasseInput;
};


export type MutationCreateClassificationArgs = {
  createClassificationInput: CreateClassificationInput;
};


export type MutationCreateEleveArgs = {
  input: CreateEleveInput;
};


export type MutationCreateFonctionArgs = {
  input: FonctionInput;
};


export type MutationCreateMatiereArgs = {
  designation: Scalars['String'];
};


export type MutationCreateNiveauArgs = {
  createNiveauInput: CreateNiveauInput;
};


export type MutationCreateOrUpdateSectionsOfClasseArgs = {
  createClasseSectionInput: CreateClasseSectionInput;
};


export type MutationCreateParentArgs = {
  input: CreateParentInput;
};


export type MutationCreateResponsableArgs = {
  input: CreateResponsableInput;
};


export type MutationCreateSectionArgs = {
  createSectionInput: CreateSectionInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveMatiereArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateAnneeScolaireArgs = {
  updateAnneeScolaireInput: UpdateAnneeScolaireInput;
};


export type MutationUpdateEleveArgs = {
  input: UpdateEleveInput;
  matricule: Scalars['String'];
};


export type MutationUpdateMatiereArgs = {
  updateMatiereInput: UpdateMatiereInput;
};


export type MutationUpdateSectionArgs = {
  updateSectionInput: UpdateSectionInput;
};

export type Niveau = {
  __typename?: 'Niveau';
  classes: Array<Classe>;
  designation: Scalars['String'];
  id: Scalars['ID'];
};

export type PaginationInput = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  currentPage: Scalars['Float'];
  itemCount: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
  totalItems: Scalars['Float'];
  totalPages: Scalars['Float'];
};

export type Parent = {
  __typename?: 'Parent';
  adresse: Scalars['String'];
  contact: Scalars['String'];
  id: Scalars['ID'];
  mere: Scalars['String'];
  pere: Scalars['String'];
  tuteur: Scalars['String'];
};

export type ParentInput = {
  adresse: Scalars['String'];
  contact: Scalars['String'];
  mere: Scalars['String'];
  pere: Scalars['String'];
  tuteur: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  eleves: ElevesResult;
  fonctionByDesignation: Fonction;
  getAllClasses: Array<Classe>;
  getAllNiveaux: Array<Niveau>;
  helloMrSchool: Scalars['String'];
  matieres: Array<Matiere>;
  WhoAmI: Utilisateur;
};


export type QueryElevesArgs = {
  elevesFilterInput: ElevesFilterInput;
  paginationInput: PaginationInput;
};


export type QueryFonctionByDesignationArgs = {
  input: Scalars['String'];
};

export type Responsable = {
  __typename?: 'Responsable';
  fonctions: Array<Fonction>;
  utilisateur: Utilisateur;
};

export type Section = {
  __typename?: 'Section';
  designation: Scalars['String'];
  id: Scalars['ID'];
};

export type TokenDto = {
  __typename?: 'TokenDto';
  token?: Maybe<Scalars['String']>;
};

export type UpdateAnneeScolaireInput = {
  debut: Scalars['DateTime'];
  fin: Scalars['DateTime'];
  id: Scalars['Float'];
};

export type UpdateEleveInput = {
  eleve: EleveInput;
  parent: ParentInput;
  utilisateur: UtilisateurInput;
};

export type UpdateMatiereInput = {
  designation: Scalars['String'];
  id: Scalars['Float'];
};

export type UpdateSectionInput = {
  designation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type Utilisateur = {
  __typename?: 'Utilisateur';
  adresse: Scalars['String'];
  contact: Scalars['String'];
  id: Scalars['ID'];
  motDePasse?: Maybe<Scalars['String']>;
  nom: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  prenom: Scalars['String'];
};

export type UtilisateurInput = {
  adresse: Scalars['String'];
  contact: Scalars['String'];
  motDePasse: Scalars['String'];
  nom: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  prenom: Scalars['String'];
};
