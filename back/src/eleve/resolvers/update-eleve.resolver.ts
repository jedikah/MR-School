import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { EleveService } from '../../eleve/eleve.service';
import { EleveInput } from '../eleve.type';
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
    @Args('id') id: string,
    @Args('eleveInput') eleveInput: EleveInput,
    @Args('utilisateurInput') utilisateurInput: UtilisateurInput,
  ) {
    const eleve = await this.eleveService.eleveByMatricule(id);
    if (!eleve) {
      throw new HttpException(
        `Cette élève n'existe pas`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const utilisateur = await this.utilisateurService.utilisateurById(
      eleve.idUtilisateur,
    );

    Object.assign<Utilisateur, UtilisateurInput>(utilisateur, {
      ...utilisateurInput,
    });

    await this.utilisateurService.updateUtilisateur(utilisateur);

    Object.assign<Eleve, EleveInput>(eleve, eleveInput);
    return this.eleveService.updateEleve(eleve);
  }
}
