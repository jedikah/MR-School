import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ID } from '@nestjs/graphql';

@Entity()
export class Utilisateur {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 25, type: 'varchar' })
  nom: string;

  @Field()
  @Column({ length: 35, type: 'varchar' })
  prenom: string;

  @Field()
  @Column({ length: 10, type: 'varchar' })
  contact: string;

  @Field()
  @Column({ length: 60, type: 'varchar' })
  adress: string;

  @Field()
  @Column({ type: 'varchar' })
  photo: string;

  @Column({ length: 60, name: 'mot_de_passe', type: 'varchar' })
  motDePasse: string;
}
