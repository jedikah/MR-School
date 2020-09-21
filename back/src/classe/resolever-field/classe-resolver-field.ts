import { ResolveField, Resolver, Root } from '@nestjs/graphql';
import { Classe } from '../classe.entity';
import { SectionService } from '../../section/section.service';
import { ClasseSectionService } from '../../classe-section/classe-section.service';
import { Section } from '../../section/section.entity';

@Resolver(() => Classe)
export class ClasseResolverField {
  constructor(
    private sectionService: SectionService,
    private classeSectionService: ClasseSectionService
  ) {}

  @ResolveField(() => [Section])
  async sections(@Root()classe: Classe): Promise<Section[]> {

    const sections = await this.classeSectionService.getAllSectionsOfAClasse(classe);
    return Promise.all(
      sections.map(sections => this.sectionService.findOneSection(sections.idSection))
    );
  }
}
