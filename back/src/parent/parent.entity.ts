import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'parent' })
export class Parent {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
}
