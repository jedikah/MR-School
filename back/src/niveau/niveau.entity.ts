import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {Classe} from "../classe/classe.entity";

@ObjectType()
@Entity({ name: 'niveau' })
export class Niveau {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 25, unique: true })
  designation: string;/**YYY-MM-DD*/

  @Field(() => [Classe])
  classes: Classe[]

}
