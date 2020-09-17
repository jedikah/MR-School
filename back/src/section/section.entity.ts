import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'section' })
export class Section {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 5, unique: true })
  designation: string;/**YYY-MM-DD*/

}
