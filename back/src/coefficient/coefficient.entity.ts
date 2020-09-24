import { Entity, ManyToOne, JoinColumn, RelationId, Column } from 'typeorm';
import { Classe } from '../classe/classe.entity';
import { Matiere } from '../matiere/matiere.entity';

@Entity()
export class Coefficient {
  @ManyToOne(() => Classe, { primary: true })
  @JoinColumn()
  classe: Classe;
  @RelationId((coefficient: Coefficient) => coefficient.classe)
  classeId: number;

  @ManyToOne(() => Matiere, { primary: true })
  @JoinColumn()
  matiere: Matiere;
  @RelationId((coefficient: Coefficient) => coefficient.matiere)
  matiereId: number;

  @Column({ nullable: true })
  valeur?: number;
}
