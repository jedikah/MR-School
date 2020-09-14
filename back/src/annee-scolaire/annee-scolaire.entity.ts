import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'annee_scolaire' })
export class AnneeScolaire {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  debut: Date;/**YYY-MM-DD*/

  @Field()
  @Column()
  fin: Date;/**YYY-MM-DD*/

}
