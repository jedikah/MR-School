import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ClasseSectionService } from '../classe-section.service';
import { CreateClasseSectionInput } from '../types/classe-section.input';
import { ClasseSection } from '../classe-section.entity';
import { UnauthorizedException } from '@nestjs/common';
import { ClasseService } from '../../classe/classe.service';
import { SectionService } from '../../section/section.service';

@Resolver()
export class CreateClasseSectionResolver {
  constructor(
    private classeSectionService: ClasseSectionService,
    private classeService: ClasseService,
    private sectionService: SectionService
  ) {}

  @Mutation(() => ClasseSection)
  async createOrUpdateSectionsOfClasse(@Args('createClasseSectionInput')
                                           classeSectionInput: CreateClasseSectionInput): Promise<ClasseSection> {
    const classe = await this.classeService.findOneClasseById(classeSectionInput.idClasse);
    const section = await this.sectionService.findOneSection(classeSectionInput.idSection);

    let classeSection: ClasseSection = await this.classeSectionService.findOneSectionofAClasse(classe, section);

    if(classeSection) {
      throw new UnauthorizedException(
        "La classe" + " "
        + classe.designation + " "
        + section.designation + " "
        + "est déjà enregistrée ..."
      );
    }
    classeSection = new ClasseSection();
    classeSection.classe = classe;
    classeSection.section = section;
    return await this.classeSectionService.createOrUpdateSectionsOfClasse(classeSection);
  }
}
