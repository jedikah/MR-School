import { Section } from './section.entity';
import { NB_ROW } from '../configs/seed';

export const SectionSeed: Section[] = Array.from(Array(NB_ROW)).map((_, i) => {
  const section = new Section();
  section.designation = `s${i}`;
  return section;
});
