import { Injectable } from '@nestjs/common';
import { CoefficientTable } from './matiere.type';
import { Classe } from '../classe/classe.entity';
import { Coefficient } from '../coefficient/coefficient.entity';

@Injectable()
export class MatiereUtils {
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
}
