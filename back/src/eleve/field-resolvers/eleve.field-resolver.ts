import { Resolver, ResolveField, Root } from '@nestjs/graphql';

import { Eleve } from '../eleve.entity';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { ParentService } from '../../parent/parent.service';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { Parent } from '../../parent/parent.entity';

@Resolver(() => Eleve)
export class EleveFieldResolver {
  constructor(
    private utilisateurService: UtilisateurService,
    private parentService: ParentService,
  ) {}

  @ResolveField(() => Utilisateur)
  async utilisateur(@Root() eleve: Eleve): Promise<Utilisateur> {
    return this.utilisateurService.utilisateurById(eleve.idUtilisateur);
  }

  @ResolveField(() => Parent)
  async parent(@Root() eleve: Eleve): Promise<Parent> {
    return this.parentService.ParentById(eleve.idParent);
  }
}
