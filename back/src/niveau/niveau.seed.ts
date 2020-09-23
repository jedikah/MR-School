import { Niveau } from './niveau.entity';
import { NB_ROW } from '../configs/seed';

export const NiveauSeed: Niveau[] = Array.from(Array(NB_ROW)).map((_, i) => {
  const niveau = new Niveau();
  niveau.designation = `niveau${i}`;
  return niveau;
});
