import { Entity, OneToOne, JoinColumn, RelationId } from 'typeorm';
import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Fonction } from '../fonction/fonction.entity';

@ObjectType()
@Entity({ name: 'responsable' })
export class Responsable {
  @OneToOne(() => Utilisateur, { primary: true })
  @Field()
  @JoinColumn()
  utilisateur: Utilisateur;
  @RelationId((responsable: Responsable) => responsable.utilisateur)
  idUtilisateur: number;

  @Field(() => [Fonction])
  fonctions: Fonction[];
}
