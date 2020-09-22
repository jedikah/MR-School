import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { EleveService } from '../../eleve/eleve.service';
import { EleveInput, UpdateEleveInput } from '../eleve.type';
import { Eleve } from '../eleve.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { UtilisateurInput } from '../../utilisateur/utilisateur.type';
import { ParentService } from '../../parent/parent.service';
import { Parent } from '../../parent/parent.entity';
import { ParentInput } from '../../parent/parent.type';

@Resolver()
export class UpdateleveResolver {
  constructor(
    private eleveService: EleveService,
    private utilisateurService: UtilisateurService,
    private parentService: ParentService,
  ) {}

  @Mutation(() => Eleve)
  async updateEleve(
    @Args('matricule') matricule: string,
    @Args('input') updateEleveInput: UpdateEleveInput,
  ): Promise<Eleve> {
    const eleve = await this.eleveService.eleveByMatricule(matricule);
    console.log(eleve);
    if (!eleve) {
      throw new HttpException(`Cette élève n'existe pas`, HttpStatus.NOT_FOUND);
    }

    let utilisateur = await this.utilisateurService.utilisateurById(
      eleve.idUtilisateur,
    );

    Object.assign<Utilisateur, UtilisateurInput>(utilisateur, {
      ...updateEleveInput.utilisateur,
    });

    utilisateur = await this.utilisateurService.updateUtilisateur(utilisateur);

    let parent = await this.parentService.ParentById(eleve.idParent);

    Object.assign<Parent, ParentInput>(parent, { ...updateEleveInput.parent });

    parent = await this.parentService.updateParent(parent);

    Object.assign<Eleve, Omit<Eleve, 'id' | 'idParent' | 'idUtilisateur'>>(
      eleve,
      { ...updateEleveInput.eleve, parent, utilisateur },
    );

    eleve.utilisateur = utilisateur;

    return this.eleveService.updateEleve(eleve);
  }
}
