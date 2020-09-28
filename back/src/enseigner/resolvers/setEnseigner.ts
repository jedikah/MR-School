import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { SetEnseignerInput, SetEnseignerResult } from '../enseigner.type';
import { EnseignerService } from '../enseigner.service';
import { Matiere } from '../../matiere/matiere.entity';
import { Classe } from '../../classe/classe.entity';
import { Section } from '../../section/section.entity';
import { Responsable } from '../../responsable/responsable.entity';
import { Enseigner } from '../enseigner.entity';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { MatiereUtils } from '../../matiere/matiere.utils';
import { MatiereService } from '../../matiere/matiere.service';

@Resolver()
export class SetEnseignerResolver {
  constructor(
    private enseignerService: EnseignerService,
    private matiereUtilis: MatiereUtils,
    private matiereService: MatiereService,
  ) {}

  @Mutation(() => SetEnseignerResult)
  async setEnseigner(
    @Args('setEnseignerInput') input: SetEnseignerInput,
  ): Promise<SetEnseignerResult> {
    const matiere = await this.matiereService.getMatiereById(input.matiereId);
    const classe = new Classe();
    classe.id = input.classeId;
    const section = new Section();
    section.id = input.sectionId;

    const toDeleteEnseigner = await this.enseignerService.isClasseSectionIn(
      classe,
      section,
      matiere,
    );

    await Promise.all(
      toDeleteEnseigner.map(async ens => {
        return this.enseignerService.removeEnseigner(ens);
      }),
    );

    await Promise.all(
      input.professeurs.map(async idProf => {
        const professeur = new Responsable();
        const utilisateur = new Utilisateur();
        utilisateur.id = idProf;
        professeur.utilisateur = utilisateur;
        const enseigner = new Enseigner();
        enseigner.matiere = matiere;
        enseigner.classe = classe;
        enseigner.section = section;
        enseigner.professeur = professeur;
        return this.enseignerService.createOrUpdateEnseigner(enseigner);
      }),
    );

    return {
      matiere,
      enseignerTable: await this.matiereUtilis.createEnseignerTable(matiere),
    };
  }
}
