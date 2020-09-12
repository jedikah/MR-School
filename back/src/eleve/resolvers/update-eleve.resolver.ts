import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { EleveService } from '../../eleve/eleve.service';
import { EleveInput, UpdateEleveInput } from '../eleve.type';
import { Eleve } from '../eleve.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { UtilisateurInput } from '../../utilisateur/utilisateur.type';

@Resolver()
export class UpdateleveResolver {
  constructor(
    private eleveService: EleveService,
    private utilisateurService: UtilisateurService,
  ) {}

  @Mutation(() => Eleve)
  async updateEleve(
    @Args('matricule') matricule: string,
    @Args('input') updateEleveInput: UpdateEleveInput,
  ): Promise<Eleve> {
    const eleve = await this.eleveService.eleveByMatricule(matricule);
    if (!eleve) {
      throw new HttpException(
        `Cette élève n'existe pas`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    let utilisateur = await this.utilisateurService.utilisateurById(
      eleve.idUtilisateur,
    );

    Object.assign<Utilisateur, UtilisateurInput>(utilisateur, {
      ...updateEleveInput.utilisateur,
    });

    utilisateur = await this.utilisateurService.updateUtilisateur(utilisateur);

    Object.assign<Eleve, EleveInput>(eleve, updateEleveInput);

    eleve.utilisateur = utilisateur;

    return this.eleveService.updateEleve(eleve);
  }
}
