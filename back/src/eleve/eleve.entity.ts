import {
  Entity,
  JoinColumn,
  RelationId,
  OneToOne,
  Column,
  ManyToOne,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { Parent } from '../parent/parent.entity';

@ObjectType()
@Entity({ name: 'eleve' })
export class Eleve {
  @OneToOne(() => Utilisateur, { primary: true })
  @Field()
  @JoinColumn({ name: 'id_utilisateur' })
  utilisateur: Utilisateur;
  @RelationId((eleve: Eleve) => eleve.utilisateur)
  idUtilisateur: number;

  @ManyToOne(() => Parent)
  @Field()
  @JoinColumn({ name: 'id_parent' })
  parent: Parent;
  @RelationId((eleve: Eleve) => eleve.parent)
  idParent: number;

  @Field()
  @Column({ length: 10 })
  matricule: string;

  @Field()
  @Column({ length: 1 })
  sexe: string;

  @Field()
  @Column()
  naissance: Date;
}
