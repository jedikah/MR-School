import { Entity, OneToOne, JoinColumn, RelationId } from 'typeorm';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
import { InputType } from '@nestjs/graphql';

@InputType()
@Entity({ name: 'responsable' })
export class Responsable {
  @OneToOne(() => Utilisateur, { primary: true })
  @JoinColumn()
  utilisater: Utilisateur;
  @RelationId((responsable: Responsable) => responsable.utilisater)
  idUtilisateur: number;
}
