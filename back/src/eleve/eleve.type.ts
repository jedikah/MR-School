import { InputType, Field, PartialType, OmitType } from '@nestjs/graphql';
import { Eleve } from './eleve.entity';
import { UtilisateurInput } from '../utilisateur/utilisateur.type';

@InputType()
export class EleveInput extends PartialType(
  OmitType(Eleve, ['utilisateur']),
  InputType,
) {
  utilisateur: UtilisateurInput;

  @Field()
  matricule: string;

  @Field()
  sexe: string;

  @Field()
  naissance: Date;
}
