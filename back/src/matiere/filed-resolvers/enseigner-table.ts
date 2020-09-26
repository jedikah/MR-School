import { Resolver, ResolveField, Root } from '@nestjs/graphql';

import { EnseignerTable } from '../matiere.type';
import { ClasseService } from '../../classe/classe.service';
import { Matiere } from '../matiere.entity';
import { ClasseSectionService } from '../../classe-section/classe-section.service';
import { ClasseSection } from '../../classe-section/classe-section.entity';
import { SectionService } from '../../section/section.service';
import { EnseignerService } from '../../enseigner/enseigner.service';

@Resolver(() => Matiere)
export class EnseignerTableFieldResolver {
  constructor(
    private classeService: ClasseService,
    private sectionService: SectionService,
    private classeSectionService: ClasseSectionService,
    private enseignerService: EnseignerService,
  ) {}

  @ResolveField(() => [EnseignerTable])
  async enseignerTable(@Root() matiere: Matiere): Promise<EnseignerTable[]> {
    const classeSection: ClasseSection[] = await this.classeSectionService.getAllClasseSection();

    return Promise.all(
      classeSection.map(async cs => {
        const classe = await this.classeService.findOneClasseById(cs.idClasse);
        const section = await this.sectionService.findOneSection(cs.idSection);
        const status = (await this.enseignerService.isClasseSectionIn(
          classe,
          section,
          matiere,
        ))
          ? true
          : false;

        return {
          classe,
          section,
          professeur: [],
          status,
        } as EnseignerTable;
      }),
    );
  }
}
