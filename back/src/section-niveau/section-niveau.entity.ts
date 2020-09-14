import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { Niveau } from '../niveau/niveau.entity';
import { Section } from '../section/section.entity';

@ObjectType()
@Entity({ name: 'section_niveau' })
export class SectionNiveau {

  @ManyToOne(() => Niveau, { primary: true })
  @Field()
  @JoinColumn({name: 'id_niveau'})
  niveau: Niveau;
  @RelationId((sectionNiveau: SectionNiveau) => sectionNiveau.niveau)
  idNiveau: number;

  @ManyToOne(() => Section, { primary: true })
  @Field()
  @JoinColumn({name: 'id_section'})
  section: Section;
  @RelationId((sectionNiveau: SectionNiveau) => sectionNiveau.section)
  idSection: number;

}
