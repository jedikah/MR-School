import { Resolver, ResolveField, Root } from '@nestjs/graphql';
import { Matiere } from '../matiere.entity';
import { CoefficientTable } from '../matiere.type';
import { ClasseService } from '../../classe/classe.service';
import { CoefficientService } from '../../coefficient/coefficient.service';

@Resolver(() => Matiere)
export class MatiereCoefficientFieldResolver {
  constructor(
    private classeService: ClasseService,
    private coefficientService: CoefficientService,
  ) {}

  @ResolveField(() => [CoefficientTable])
  async coefficientTable(
    @Root() matiere: Matiere,
  ): Promise<CoefficientTable[]> {
    const classes = await this.classeService.getAllClasses();
    const coefficients = await this.coefficientService.getCoefficientsByMatiere(
      matiere,
    );

    const coefficientTable: CoefficientTable[] = classes.map(classe => {
      const entry = new CoefficientTable();
      entry.id = classe.id;
      entry.classe = classe;

      const coefficient = coefficients.find(c => c.classeId === classe.id);
      if (coefficient) {
        entry.coefficient = coefficient.valeur;
        entry.checked = true;
      } else {
        entry.coefficient = null;
        entry.checked = false;
      }

      return entry;
    });

    return coefficientTable;
  }
}
