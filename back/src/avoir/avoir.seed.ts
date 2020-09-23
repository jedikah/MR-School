import { Avoir } from './avoir.entity';
import { Responsable } from '../responsable/responsable.entity';
import { Fonction } from '../fonction/fonction.entity';

export const AvoirSeed = (
  responsables: Responsable[],
  fonctions: Fonction[],
): Avoir[] => {
  return responsables.map((r, i) => {
    const avoir = new Avoir();
    avoir.responsable = r;
    if (i % 2) avoir.fonction = fonctions[0];
    else avoir.fonction = fonctions[1];
    return avoir;
  });
};
