import { Query, Resolver, Args } from '@nestjs/graphql';
import { SelectQueryBuilder } from 'typeorm';

import { EleveService } from '../eleve.service';
import { ElevesResult, ElevesFilterInput } from '../eleve.type';
import { PaginationInput } from '../../types';
import { Eleve } from '../eleve.entity';

@Resolver()
export class ElevesResolver {
  constructor(private eleveService: EleveService) {}

  @Query(() => ElevesResult)
  async eleves(
    @Args('paginationInput') paginationInput: PaginationInput,
    @Args('elevesFilterInput') elevesFilterInput: ElevesFilterInput,
  ): Promise<ElevesResult> {
    let request: SelectQueryBuilder<Eleve>;
    if (elevesFilterInput.matricule)
      request = this.eleveService.searchEleveByMatricule(
        elevesFilterInput.matricule,
      );
    else {
      request = this.eleveService.getAllEleves();
    }

    const paginateEleves = await this.eleveService.paginate(
      request,
      paginationInput,
    );

    return {
      eleves: paginateEleves.items,
      paginationMeta: paginateEleves.meta,
    };
  }
}
