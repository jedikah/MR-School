import { Args, Resolver, Query } from '@nestjs/graphql';

import { ResponsableService } from '../responsable.service';
import { Responsable } from '../responsable.entity';
import { ResponsablesFilterInput } from '../responsable.type';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/jwt-auth.guard';

@Resolver()
@UseGuards(GqlAuthGuard)
export class ResponsablesResolver {
  constructor(private responsableService: ResponsableService) {}

  @Query(() => [Responsable])
  async responsables(
    @Args('responsablesFilterInput')
    responsablesFilterInput: ResponsablesFilterInput,
  ): Promise<Responsable[]> {
    return (
      await this.responsableService.searchResponsableByContact(
        responsablesFilterInput.contact,
      )
    ).sort((a, b) => b.utilisateur.id - a.utilisateur.id);
  }
}
