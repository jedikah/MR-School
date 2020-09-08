import { Entity, ManyToOne, JoinColumn, RelationId } from 'typeorm';
import { Fonction } from '../fonction/fonction.entity';
import { Responsable } from '../responsable/responsable.entity';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'avoir' })
export class Avoir {
  @ManyToOne(() => Responsable, { primary: true })
  @JoinColumn({ name: 'id_responsable' })
  responsable: Responsable;
  @RelationId((avoir: Avoir) => avoir.responsable)
  idResponsable?: number;

  @ManyToOne(() => Fonction, { primary: true })
  @JoinColumn({ name: 'id_fonction' })
  fonction: Fonction;
  @RelationId((avoir: Avoir) => avoir.fonction)
  idFonction?: number;
}
