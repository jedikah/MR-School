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


export type Eleve = {
  __typename?: 'Eleve';
  matricule: Scalars['String'];
  naissance: Scalars['DateTime'];
  sexe: Scalars['String'];
  utilisateur: Utilisateur;
};

export type EleveInput = {
  matricule: Scalars['String'];
  naissance: Scalars['DateTime'];
  sexe: Scalars['String'];
  utilisateur: UtilisateurInput;
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
  createResponsable: Responsable;
  login: TokenDto;
};


export type MutationCreateEleveArgs = {
  input: EleveInput;
};


export type MutationCreateFonctionArgs = {
  input: FonctionInput;
};


export type MutationCreateResponsableArgs = {
  input: ResponsableInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  fonctionByDesignation: Fonction;
  helloMrSchool: Scalars['String'];
  WhoAmI: Utilisateur;
};


export type QueryFonctionByDesignationArgs = {
  input: Scalars['String'];
};

export type Responsable = {
  __typename?: 'Responsable';
  fonctions: Array<Fonction>;
  utilisateur: Utilisateur;
};

export type ResponsableInput = {
  fonction: FonctionInput;
  utilisateur: UtilisateurInput;
};

export type TokenDto = {
  __typename?: 'TokenDto';
  token?: Maybe<Scalars['String']>;
};

export type Utilisateur = {
  __typename?: 'Utilisateur';
  adresse: Scalars['String'];
  contact: Scalars['String'];
  id: Scalars['ID'];
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
