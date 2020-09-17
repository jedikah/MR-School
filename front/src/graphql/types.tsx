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

export type CreateEleveInput = {
  eleve: EleveInput;
  parent: ParentInput;
  utilisateur: CreateUtilisateurInput_Eleve;
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
  utilisateur: UtilisateurInput;
};

export type CreateUtilisateurInput_Eleve = {
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

export type Mutation = {
  __typename?: 'Mutation';
  createEleve: Eleve;
  createFonction: Fonction;
  createParent: Parent;
  createResponsable: Responsable;
  login: TokenDto;
  updateEleve: Eleve;
};


export type MutationCreateEleveArgs = {
  input: CreateEleveInput;
};


export type MutationCreateFonctionArgs = {
  input: FonctionInput;
};


export type MutationCreateParentArgs = {
  input: CreateParentInput;
};


export type MutationCreateResponsableArgs = {
  input: CreateResponsableInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdateEleveArgs = {
  input: UpdateEleveInput;
  matricule: Scalars['String'];
};

export type Niveau = {
  __typename?: 'Niveau';
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
  helloMrSchool: Scalars['String'];
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

export type UpdateEleveInput = {
  eleve: EleveInput;
  parent: ParentInput;
  utilisateur: UtilisateurInput;
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
