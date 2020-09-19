import { Entity, Column, JoinColumn, RelationId, ManyToOne } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Eleve } from '../eleve/eleve.entity';
import { AnneeScolaire } from '../annee-scolaire/annee-scolaire.entity';
import { Section } from '../section/section.entity';
import { Classe } from '../classe/classe.entity';

@ObjectType()
@Entity({ name: 'classification' })
export class Classification {

  @ManyToOne(() => Eleve, { primary: true })
  @Field()
  @JoinColumn({ name: 'id_utilisateur' })
  eleve: Eleve;
  @RelationId((classification: Classification) => classification.eleve)
  idEleve: number;

  @ManyToOne(() => Classe, { primary: true})
  @Field()
  @JoinColumn({ name: 'id_classe' })
  classe: Classe
  @RelationId((classification: Classification) => classification.classe)
  idClasse: number;

  @ManyToOne(() => Section, { primary: true})
  @Field()
  @JoinColumn({ name: 'id_section' })
  section: Section
  @RelationId((classification: Classification) => classification.section)
  idSection: number

  @ManyToOne(() => AnneeScolaire, { primary: true})
  @Field()
  @JoinColumn({ name: 'id_anneeScolaire' })
  anneeScolaire: AnneeScolaire
  @RelationId((classification: Classification) => classification.anneeScolaire)
  idAnneeScolaire: number

  @Field()
  @Column({ name: 'num_appel' })
  numAppel: number

}
