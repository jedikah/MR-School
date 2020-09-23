import { Entity, ManyToOne, RelationId, JoinColumn } from 'typeorm';

import { Matiere } from '../matiere/matiere.entity';
import { Classe } from '../classe/classe.entity';
import { Responsable } from '../responsable/responsable.entity';
import { Section } from '../section/section.entity';

@Entity()
export class Enseigner {
  @ManyToOne(() => Matiere, { primary: true })
  @JoinColumn()
  matiere: Matiere;
  @RelationId((enseigner: Enseigner) => enseigner.matiere)
  matiereId: number;

  @ManyToOne(() => Classe, { primary: true })
  @JoinColumn()
  classe: Classe;
  @RelationId((enseigner: Enseigner) => enseigner.classe)
  classeId: number;

  @ManyToOne(() => Responsable, { primary: true })
  @JoinColumn()
  professeur: Responsable;
  @RelationId((enseigner: Enseigner) => enseigner.professeur)
  professeurId: number;

  @ManyToOne(() => Section, { primary: true })
  @JoinColumn()
  section: Section;
  @RelationId((enseigner: Enseigner) => enseigner.section)
  sectionId: number;
}
