import { InputType, Field, PartialType, OmitType } from '@nestjs/graphql';
import { Eleve } from './eleve.entity';
import { UtilisateurInput } from '../utilisateur/utilisateur.type';
import { ParentInput } from '../parent/parent.type';

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

  @Field(() => UtilisateurInput)
  utilisateur: UtilisateurInput;

  @Field(() => ParentInput)
  parent: ParentInput;
}

@InputType()
export class UpdateEleveInput extends CreateEleveInput {}
