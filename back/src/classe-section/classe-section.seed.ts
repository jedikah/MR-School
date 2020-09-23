import { Classe } from '../classe/classe.entity';
import { Section } from '../section/section.entity';
import { ClasseSection } from './classe-section.entity';
import { NB_ROW } from '../configs/seed';

export const ClasseSectionSeed = (
  classes: Classe[],
  sections: Section[],
): ClasseSection[] => {
  return Array.from(Array(NB_ROW)).map((_, i) => {
    const classeSection = new ClasseSection();
    classeSection.classe = classes[i];
    classeSection.section = sections[i];
    return classeSection;
  });
};
