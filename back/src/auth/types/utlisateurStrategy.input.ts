import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UtlisateurStrategyInput {
  @Field()
  id: number
  @Field()
  contact: string
  @Field()
  motDePasse: string
}
