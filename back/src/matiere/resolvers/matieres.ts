import { Resolver, Query } from '@nestjs/graphql';

import { MatiereService } from '../matiere.service';
import { Matiere } from '../matiere.entity';

@Resolver()
export class MatieresResolver {
  constructor(private matiereService: MatiereService) {}

  @Query(() => [Matiere])
  async matieres(): Promise<Matiere[]> {
    return this.matiereService.getAllMatieres();
  }
}
