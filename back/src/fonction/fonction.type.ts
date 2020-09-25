import { InputType, Field, PartialType, OmitType, ID } from '@nestjs/graphql';

import { Fonction } from './fonction.entity';

@InputType()
export class FonctionInput extends PartialType(
  OmitType(Fonction, ['id']),
  InputType,
) {
  @Field()
  designation: string;
}

@InputType()
export class FonctionUpdateInput extends PartialType(Fonction, InputType) {
  @Field()
  id: number;

  @Field()
  designation: string;
}
