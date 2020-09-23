import {
  InputType,
  Field,
  PartialType,
  OmitType,
  ObjectType,
} from '@nestjs/graphql';

import { Eleve } from './eleve.entity';
import {
  CreateUtilisateurInput_Eleve,
  UtilisateurInput,
} from '../utilisateur/utilisateur.type';
import { ParentInput } from '../parent/parent.type';
import { PaginationMeta } from '../types';

@InputType()
export class EleveInput extends PartialType(
  OmitType(Eleve, ['utilisateur', 'parent']),
  InputType,
) {
  @Field()
  matricule: string;

  @Field()
  sexe: string;

  @Field()
  naissance: Date;
}

@InputType()
export class CreateEleveInput {
  @Field(() => EleveInput)
  eleve: EleveInput;

  @Field(() => CreateUtilisateurInput_Eleve)
  utilisateur: CreateUtilisateurInput_Eleve;

  @Field(() => ParentInput)
  parent: ParentInput;
}

@InputType()
export class UpdateEleveInput {
  @Field(() => EleveInput)
  eleve: EleveInput;

  @Field(() => UtilisateurInput)
  utilisateur: UtilisateurInput;

  @Field(() => ParentInput)
  parent: ParentInput;
}

// query eleves

@ObjectType()
export class ElevesResult {
  @Field(() => [Eleve])
  eleves: Eleve[];

  @Field(() => PaginationMeta)
  paginationMeta: PaginationMeta;
}

@InputType()
export class ElevesFilterInput {
  @Field()
  matricule: string;
}

@InputType()
export class InputMatriculeEleve {
  @Field()
  matricule: string;
}

// fin query eleves
