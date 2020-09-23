import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { Responsable } from '../responsable/responsable.entity';
import { Fonction } from '../fonction/fonction.entity';
import { Avoir } from '../avoir/avoir.entity';
import { Matiere } from '../matiere/matiere.entity';
import { Niveau } from '../niveau/niveau.entity';
import { Classe } from '../classe/classe.entity';
import { Section } from '../section/section.entity';
import { ClasseSection } from '../classe-section/classe-section.entity';

import { UtilisateurSeed } from '../utilisateur/utilisateur.seed';
import { ResponsableSeed } from '../responsable/responsable.seed';
import { FonctionSeed } from '../fonction/fonction.seed';
import { AvoirSeed } from '../avoir/avoir.seed';
import { MatiereSeed } from '../matiere/matiere.seed';
import { NiveauSeed } from '../niveau/niveau.seed';
import { ClasseSeed } from '../classe/classe.seed';
import { SectionSeed } from '../section/section.seed';
import { ClasseSectionSeed } from '../classe-section/classe-section.seed';
import { Coefficient } from '../coefficient/coefficient.entity';
import { CoefficientSeed } from '../coefficient/coefficient.seed';

export class seed1600849788360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const matieres = await getRepository(Matiere).save(MatiereSeed);
    const niveaux = await getRepository(Niveau).save(NiveauSeed);
    const classes = await getRepository(Classe).save(ClasseSeed(niveaux));
    const sections = await getRepository(Section).save(SectionSeed);
    const utilisateurs = await getRepository(Utilisateur).save(UtilisateurSeed);
    const responsables = await getRepository(Responsable).save(
      ResponsableSeed(utilisateurs),
    );
    const fonctions = await getRepository(Fonction).save(FonctionSeed);

    const avoirs = await getRepository(Avoir).save(
      AvoirSeed(responsables, fonctions),
    );
    const classeSections = await getRepository(ClasseSection).save(
      ClasseSectionSeed(classes, sections),
    );
    const coefficients = await getRepository(Coefficient).save(
      CoefficientSeed(classes, matieres),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
