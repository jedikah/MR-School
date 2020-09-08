import { Resolver, Args, Query } from '@nestjs/graphql';

import { FonctionService } from '../fonction.service';
import { Fonction } from '../fonction.entity';

@Resolver(() => Fonction)
export class FonctionByDesignationResolver {
  constructor(private fonctionService: FonctionService) {}

  @Query(() => Fonction)
  fonctionByDesignation(@Args('input') input: string): Promise<Fonction> {
    return this.fonctionService.fonctionByDesignation(input);
  }
}
