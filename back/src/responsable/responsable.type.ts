import { PartialType, InputType, Field, OmitType } from '@nestjs/graphql';
import { Responsable } from './responsable.entity';
import {
  CreateUtilisateurInput_Responsable,
  UtilisateurInput,
} from '../utilisateur/utilisateur.type';
import { FonctionInput } from '../fonction/fonction.type';

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
