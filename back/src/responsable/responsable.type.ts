import {
  PartialType,
  InputType,
  Field,
  OmitType,
  ObjectType,
} from '@nestjs/graphql';
import { Responsable } from './responsable.entity';
import {
  CreateUtilisateurInput_Responsable,
  UtilisateurInput,
} from '../utilisateur/utilisateur.type';
import { FonctionInput } from '../fonction/fonction.type';
import { PaginationMeta } from '../types';

@InputType()
export class ResponsableInput extends PartialType(
  OmitType(Responsable, ['fonctions', 'utilisateur'] as const),
  InputType,
) {
  @Field(() => UtilisateurInput)
  utilisateur: UtilisateurInput;

  @Field(() => FonctionInput)
  fonction: FonctionInput;
}

@InputType()
export class CreateResponsableInput {
  @Field(() => CreateUtilisateurInput_Responsable)
  utilisateur: CreateUtilisateurInput_Responsable;

  @Field(() => FonctionInput)
  fonction: FonctionInput;
}

@ObjectType()
export class ResponsableResult {
  @Field(() => [Responsable])
  responsables: Responsable[];

  @Field(() => PaginationMeta)
  paginationMeta: PaginationMeta;
}

@InputType()
export class ResponsablesFilterInput {
  @Field({ nullable: true })
  contact: string;
}
