import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'parent' })
export class Parent {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 60 })
  pere: string;

  @Field()
  @Column({ length: 60 })
  mere: string;

  @Field()
  @Column({ length: 60 })
  tuteur: string;

  @Field()
  @Column({ length: 60 })
  adresse: string;

  @Field()
  @Column({ unique: true, length: 60 })
  contact: string;
}
