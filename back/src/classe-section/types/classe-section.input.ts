import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClasseSectionInput {

  @Field()
  idClasse: number;

  @Field()
  idSection: number;
}
