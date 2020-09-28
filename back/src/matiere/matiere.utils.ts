import { Injectable } from '@nestjs/common';
import { CoefficientTable, EnseignerTable } from './matiere.type';
import { Classe } from '../classe/classe.entity';
import { Coefficient } from '../coefficient/coefficient.entity';
import { ClasseService } from '../classe/classe.service';
import { SectionService } from '../section/section.service';
import { ClasseSectionService } from '../classe-section/classe-section.service';
import { EnseignerService } from '../enseigner/enseigner.service';
import { ResponsableService } from '../responsable/responsable.service';
import { ClasseSection } from '../classe-section/classe-section.entity';
import { Enseigner } from '../enseigner/enseigner.entity';
import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { Matiere } from './matiere.entity';

@Injectable()
export class MatiereUtils {
  constructor(
    private classeService: ClasseService,
    private sectionService: SectionService,
    private classeSectionService: ClasseSectionService,
    private enseignerService: EnseignerService,
    private responsableService: ResponsableService,
  ) {}

  createCoefficientTable(
    classes: Classe[],
    coefficients: Coefficient[],
  ): CoefficientTable[] {
    return classes.map(classe => {
      const entry = new CoefficientTable();
      entry.classe = classe;

      const coefficient = coefficients.find(c => c.classeId === classe.id);
      if (coefficient) {
        entry.coefficient = coefficient.valeur;
        entry.status = true;
      } else {
        entry.coefficient = null;
        entry.status = false;
      }

      return entry;
    });
  }

  async createEnseignerTable(matiere: Matiere): Promise<EnseignerTable[]> {
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
