import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'annee_scolaire' })
export class AnneeScolaire {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'date' })
  debut: Date;/**YYY-MM-DD*/

  @Field()
  @Column({ type: 'date' })
  fin: Date;/**YYY-MM-DD*/

}
