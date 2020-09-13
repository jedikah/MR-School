import { InputType, Field, PartialType, OmitType } from '@nestjs/graphql';
import { Eleve } from './eleve.entity';
import { UtilisateurInput } from '../utilisateur/utilisateur.type';

@InputType()
export class EleveInput extends PartialType(
  OmitType(Eleve, ['utilisateur']),
  InputType,
) {
  @Field()
  utilisateur: UtilisateurInput;

  @Field()
  matricule: string;

  @Field()
  sexe: string;

  @Field()
  naissance: Date;
}

@InputType()
export class CreateEleveInput extends EleveInput {}

@InputType()
export class UpdateEleveInput extends EleveInput {}
