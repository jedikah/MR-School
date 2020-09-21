import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'fonction' })
export class Fonction {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true, length: 10 })
  designation: string;
}
