import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field()
  contact: string

  @Field()
  motDePasse: string
}
