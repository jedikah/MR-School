import {
  InputType,
  PartialType,
  Field,
  OmitType,
  ID,
  ObjectType,
} from '@nestjs/graphql';
import { Utilisateur } from './utilisateur.entity';

@InputType()
export class UtilisateurInput extends PartialType(
  OmitType(Utilisateur, ['id']),
  InputType,
) {
  @Field()
  nom: string;

  @Field()
  prenom: string;

  @Field()
  adresse: string;

  @Field()
  contact: string;

  @Field()
  motDePasse: string;
}
@InputType()
export class CreateUtilisateurInput_Eleve extends OmitType(UtilisateurInput, [
  'motDePasse',
]) {
  @Field()
  nom: string;

  @Field()
  prenom: string;

  @Field()
  adresse: string;

  @Field()
  contact: string;
}

@InputType()
export class CreateUtilisateurInput_Responsable extends CreateUtilisateurInput_Eleve {}

@InputType()
export class UtilisateurUpdateInput extends CreateUtilisateurInput_Eleve {}

@ObjectType()
export class UtilisateurOutut extends OmitType(Utilisateur, ['motDePasse']) {}

export class UtilisateurUpdateOutut extends UtilisateurOutut {}
