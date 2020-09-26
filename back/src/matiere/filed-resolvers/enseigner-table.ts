import { Resolver, ResolveField, Root } from '@nestjs/graphql';

import { EnseignerTable } from '../matiere.type';
import { ClasseService } from '../../classe/classe.service';
import { Matiere } from '../matiere.entity';
import { ClasseSectionService } from '../../classe-section/classe-section.service';
import { Classe } from '../../classe/classe.entity';
import { Section } from '../../section/section.entity';
import { ClasseSection } from '../../classe-section/classe-section.entity';
import { SectionService } from '../../section/section.service';

@Resolver(() => Matiere)
export class EnseignerTableFieldResolver {
  constructor(
    private classeService: ClasseService,
    private sectionService: SectionService,
    private classeSectionService: ClasseSectionService,
  ) {}

  @ResolveField(() => [EnseignerTable])
  async enseignerTable(@Root() matiere: Matiere): Promise<EnseignerTable[]> {
    const classeSection: ClasseSection[] = await this.classeSectionService.getAllClasseSection();

    return Promise.all(
      classeSection.map(async cs => {
        return {
          classe: await this.classeService.findOneClasseById(cs.idClasse),
          section: await this.sectionService.findOneSection(cs.idSection),
          professeur: [], // list de prof associer a la classe + section
          status: true, // si la classe + section possede au moin un ou plusieur enseignant
        } as EnseignerTable;
      }),
    );
  }
}
