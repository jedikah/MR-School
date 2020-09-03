import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
@Entity({ name: 'fonction' })
export class Fonction {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn({ name: 'id_fonction' })
  idFonction?: number;

  @Field()
  @Column({ unique: true, length: 10 })
  designation: string;
}
