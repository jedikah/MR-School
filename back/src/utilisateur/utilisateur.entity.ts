import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'utilisateur' })
export class Utilisateur {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 20 })
  nom: string;

  @Field()
  @Column({ length: 30 })
  prenom: string;

  @Field()
  @Column({ length: 60 })
  adresse: string;

  @Field()
  @Column({ unique: true, length: 10 })
  contact: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  photo?: string;

  @Column({ name: 'mot_de_passe', length: 60 })
  @Field({ nullable: true })
  motDePasse?: string;
}
