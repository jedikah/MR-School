import { Query, Resolver } from '@nestjs/graphql';
import { Eleve } from '../eleve.entity';
import { EleveService } from '../eleve.service';

@Resolver(() => Eleve)
export class ElevesResolver {
  constructor(private eleveService: EleveService) {}

  @Query(() => [Eleve])
  async eleves(): Promise<Eleve[]> {
    return this.eleveService.getAllEleves();
  }
}
