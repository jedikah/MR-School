import { InputType, Field, PartialType, OmitType } from '@nestjs/graphql';

import { Fonction } from './fonction.entity';

@InputType()
export class FonctionInput extends PartialType(
  OmitType(Fonction, ['id']),
  InputType,
) {
  @Field()
  designation: string;
}
