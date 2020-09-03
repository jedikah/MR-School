import { Entity, JoinColumn, RelationId, OneToOne, Column } from 'typeorm';
import { InputType, Field } from '@nestjs/graphql';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';

@InputType()
@Entity({ name: 'eleve' })
export class Eleve {
  @OneToOne(() => Utilisateur, { primary: true })
  @JoinColumn()
  utilisater: Utilisateur;
  @RelationId((eleve: Eleve) => eleve.utilisater)
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
