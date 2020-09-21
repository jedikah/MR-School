import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { Section } from '../section/section.entity';
import {Classe} from "../classe/classe.entity";

@ObjectType()
@Entity({ name: 'classe_section' })
export class ClasseSection {

  @ManyToOne(() => Classe, { primary: true })
  @Field()
  @JoinColumn({name: 'id_classe'})
  classe: Classe;
  @RelationId((classeSection: ClasseSection) => classeSection.classe)
  idClasse: number;

  @ManyToOne(() => Section, { primary: true })
  @Field()
  @JoinColumn({name: 'id_section'})
  section: Section;
  @RelationId((classeSection: ClasseSection) => classeSection.section)
  idSection: number;

}
