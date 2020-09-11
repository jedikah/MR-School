import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenDto {
  @Field({nullable: true})
  token?: string
}