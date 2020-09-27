import { Resolver, ResolveField, Root } from '@nestjs/graphql';

import { EnseignerTable } from '../matiere.type';
import { ClasseService } from '../../classe/classe.service';
import { Matiere } from '../matiere.entity';
import { ClasseSectionService } from '../../classe-section/classe-section.service';
import { ClasseSection } from '../../classe-section/classe-section.entity';
import { SectionService } from '../../section/section.service';
import { EnseignerService } from '../../enseigner/enseigner.service';
import { Enseigner } from '../../enseigner/enseigner.entity';
import { ResponsableService } from '../../responsable/responsable.service';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';

@Resolver(() => Matiere)
export class EnseignerTableFieldResolver {
  constructor(
    private classeService: ClasseService,
    private sectionService: SectionService,
    private classeSectionService: ClasseSectionService,
    private enseignerService: EnseignerService,
    private responsableService: ResponsableService,
  ) {}

  @ResolveField(() => [EnseignerTable])
  async enseignerTable(@Root() matiere: Matiere): Promise<EnseignerTable[]> {
    const classeSection: ClasseSection[] = await this.classeSectionService.getAllClasseSection();

    return Promise.all(
      classeSection.map(async cs => {
        const classe = await this.classeService.findOneClasseById(cs.idClasse);
        const section = await this.sectionService.findOneSection(cs.idSection);
        const enseigners: Enseigner[] = await this.enseignerService.isClasseSectionIn(
          classe,
          section,
          matiere,
        );

        return {
          classe,
          section,
          professeur: await Promise.all(
            enseigners.map(async ens => {
              const utilisateur = new Utilisateur();
              utilisateur.id = ens.professeurId;
              return this.responsableService.getResponsableById(utilisateur);
            }),
          ),
          status: enseigners.length > 0,
        } as EnseignerTable;
      }),
    );
  }
}
