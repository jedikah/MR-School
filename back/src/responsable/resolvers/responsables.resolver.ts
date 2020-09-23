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

@Resolver()
export class ResponsablesResolver {
  constructor(
    private utilisateurService: UtilisateurService,
    private responsableService: ResponsableService,
    private fonctionService: FonctionService,
    private avoirService: AvoirService,
  ) {}

  @Query(() => ResponsableResult)
  async responsables(
    @Args('paginationInput') paginationInput: PaginationInput,
    @Args('responsableFilterInput')
    responsableFilterInput: ResponsablesFilterInput,
  ): Promise<ResponsableResult> {
    let request: Promise<Responsable[]>;

    if (responsableFilterInput.contact)
      request = this.responsableService.searchResponsableByContact(
        responsableFilterInput.contact,
      );
    else request = this.responsableService.getAllResponsables();

    const paginateResponsables = await this.responsableService.paginate(
      request,
      paginationInput,
    );
    return {
      responsables: paginateResponsables.items,
      paginationMeta: paginateResponsables.meta,
    };
  }
}
