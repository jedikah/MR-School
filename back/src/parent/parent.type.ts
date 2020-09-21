import { InputType, PartialType, OmitType, Field } from '@nestjs/graphql';
import { Parent } from './parent.entity';

@InputType()
export class ParentInput extends PartialType(
  OmitType(Parent, ['id']),
  InputType,
) {
  @Field()
  pere: string;

  @Field()
  mere: string;

  @Field()
  tuteur: string;

  @Field()
  adresse: string;

  @Field()
  contact: string;
}

@InputType()
export class CreateParentInput extends ParentInput {}

@InputType()
export class UpdateParentInput extends ParentInput {}
