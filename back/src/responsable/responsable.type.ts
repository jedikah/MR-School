import { PartialType, InputType, Field, OmitType } from '@nestjs/graphql';
import { Responsable } from './responsable.entity';
import { UtilisateurInput } from '../utilisateur/utilisateur.type';
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
