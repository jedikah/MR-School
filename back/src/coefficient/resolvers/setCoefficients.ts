import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { CoefficientService } from '../coefficient.service';
import { IdCoefficient, SetCoefficientsResult } from '../coefficient.type';
import { MatiereService } from '../../matiere/matiere.service';
import { ClasseService } from '../../classe/classe.service';
import { Coefficient } from '../coefficient.entity';
import { MatiereUtils } from '../../matiere/matiere.utils';

@Resolver()
export class SetCoefficientResolver {
  constructor(
    private coefficientService: CoefficientService,
    private matiereService: MatiereService,
    private classeService: ClasseService,
    private matiereUtilis: MatiereUtils,
  ) {}

  @Mutation(() => SetCoefficientsResult)
  async setCoefficients(
    @Args('idCoefficient')
    idCoefficient: IdCoefficient,
  ): Promise<SetCoefficientsResult> {
    const classes = await this.classeService.getAllClasses();
    const matiere = await this.matiereService.getMatiereById(
      idCoefficient.idMatiere,
    );

    await this.coefficientService.deleteCoefficients(
      idCoefficient.idClasses,
      matiere.id,
    );

    const coefficients = await Promise.all(
      idCoefficient.idClasses.map(async idClasse => {
        const classe = await this.classeService.findOneClasseById(idClasse);
        const coefficient = new Coefficient();
        coefficient.matiere = matiere;
        coefficient.classe = classe;
        return this.coefficientService.createOrUpdateCoefficient(coefficient);
      }),
    );
    const coefficientTable = this.matiereUtilis.createCoefficientTable(
      classes,
      coefficients,
    );

    const result = new SetCoefficientsResult();
    result.matiereId = matiere.id;
    result.coefficientTable = coefficientTable;
    return result;
  }
}
