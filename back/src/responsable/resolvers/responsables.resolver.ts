import { Args, Resolver, Query } from '@nestjs/graphql';

import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { ResponsableService } from '../responsable.service';
import { FonctionService } from '../../fonction/fonction.service';
import { AvoirService } from '../../avoir/avoir.service';
import { Responsable } from '../responsable.entity';
import {
  ResponsableResult,
  ResponsablesFilterInput,
} from '../responsable.type';
import { PaginationInput } from '../../types';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';

@Resolver()
export class ResponsablesResolver {
  constructor(
    private utilisateurService: UtilisateurService,
    private responsableService: ResponsableService,
    private fonctionService: FonctionService,
    private avoirService: AvoirService,
  ) {}

  @Query(() => [Responsable])
  async responsables(
    @Args('responsablesFilterInput', { nullable: true })
    responsablesFilterInput: ResponsablesFilterInput,
  ): Promise<Responsable[]> {
    let responsables: Responsable[];

    if (responsablesFilterInput && responsablesFilterInput.contact) {
      return await this.responsableService.searchResponsableByContact(
        responsablesFilterInput.contact,
      );
    } else {
      responsables = await this.responsableService.getAllResponsables();
      console.log(responsables);
    }

    return responsables;
  }
}
