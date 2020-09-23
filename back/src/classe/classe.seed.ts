import { Classe } from './classe.entity';
import { Niveau } from '../niveau/niveau.entity';

export const ClasseSeed = (niveaux: Niveau[]): Classe[] => {
  return niveaux.map((n, i) => {
    const classe = new Classe();
    classe.designation = `classe${i}`;
    classe.niveau = n;
    return classe;
  });
};
