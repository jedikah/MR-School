import { Coefficient } from './coefficient.entity';
import { Classe } from '../classe/classe.entity';
import { Matiere } from '../matiere/matiere.entity';
import { NB_ROW } from '../configs/seed';

export const CoefficientSeed = (
  classes: Classe[],
  matieres: Matiere[],
): Coefficient[] => {
  return Array.from(Array(NB_ROW)).map((_, i) => {
    const coefficient = new Coefficient();
    coefficient.matiere = matieres[i];
    coefficient.classe = classes[i];
    coefficient.valeur = i;
    return coefficient;
  });
};
