import { Matiere } from './matiere.entity';
import { NB_ROW } from '../configs/seed';

export const MatiereSeed: Matiere[] = Array.from(Array(NB_ROW)).map((_, i) => {
  const matiere = new Matiere();
  matiere.designation = `mat${i}`;
  return matiere;
});
