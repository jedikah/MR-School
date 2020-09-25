import { Resolver, ResolveField, Root } from '@nestjs/graphql';
import { Matiere } from '../matiere.entity';
import { CoefficientTable } from '../matiere.type';
import { ClasseService } from '../../classe/classe.service';
import { CoefficientService } from '../../coefficient/coefficient.service';
import { MatiereUtils } from '../matiere.utils';

@Resolver(() => Matiere)
export class MatiereCoefficientFieldResolver {
  constructor(
    private classeService: ClasseService,
    private coefficientService: CoefficientService,
    private matiereUtilis: MatiereUtils,
  ) {}

  @ResolveField(() => [CoefficientTable])
  async coefficientTable(
    @Root() matiere: Matiere,
  ): Promise<CoefficientTable[]> {
    const classes = await this.classeService.getAllClasses();
    const coefficients = await this.coefficientService.getCoefficientsByMatiere(
      matiere,
    );

    const coefficientTable: CoefficientTable[] = this.matiereUtilis.createCoefficientTable(
      classes,
      coefficients,
    );

    return coefficientTable;
  }
}
