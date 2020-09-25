import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { CoefficientService } from '../coefficient.service';
import { MatiereService } from '../../matiere/matiere.service';
import { ClasseService } from '../../classe/classe.service';
import { CoefficientInput } from '../coefficient.type';

@Resolver()
export class SetCoefficientValueResolver {
  constructor(
    private coefficientService: CoefficientService,
    private matiereService: MatiereService,
    private classeService: ClasseService,
  ) {}

  @Mutation(() => Boolean)
  async setCoefficientValue(
    @Args('coefficientInput') coefficientInput: CoefficientInput,
  ): Promise<boolean> {
    const { matiereId, classeId, value } = coefficientInput;
    const matiere = await this.matiereService.getMatiereById(matiereId);
    const classe = await this.classeService.findOneClasseById(classeId);
    const coefficient = await this.coefficientService.getCoefficientByMatiereAndClasse(
      matiere,
      classe,
    );

    coefficient.valeur = value;
    coefficient.classe = classe;
    coefficient.matiere = matiere;

    const result = await this.coefficientService.createOrUpdateCoefficient(
      coefficient,
    );
    return result ? true : false;
  }
}
