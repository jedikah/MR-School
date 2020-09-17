import { Query, Resolver, Args } from '@nestjs/graphql';

import { EleveService } from '../eleve.service';
import { ElevesResult } from '../eleve.type';
import { PaginationInput } from '../../types';

@Resolver()
export class ElevesResolver {
  constructor(private eleveService: EleveService) {}

  @Query(() => ElevesResult)
  async eleves(
    @Args('paginationInput') paginationInput: PaginationInput,
  ): Promise<ElevesResult> {
    const paginateEleves = await this.eleveService.paginate(
      this.eleveService.getAllEleves(),
      paginationInput,
    );

    return {
      eleves: paginateEleves.items,
      paginationMeta: paginateEleves.meta,
    };
  }
}
