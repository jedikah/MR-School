import { Entity, JoinColumn, RelationId, OneToOne, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';

@ObjectType()
@Entity({ name: 'eleve' })
export class Eleve {
  @OneToOne(() => Utilisateur, { primary: true })
  @Field()
  @JoinColumn()
  utilisateur: Utilisateur;
  @RelationId((eleve: Eleve) => eleve.utilisateur)
  idUtilisateur: number;

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
