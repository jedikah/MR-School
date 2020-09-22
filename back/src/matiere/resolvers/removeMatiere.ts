import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { MatiereService } from '../matiere.service';

@Resolver()
export class RemoveMatiereResolver {
  constructor(private matiereService: MatiereService) {}

  @Mutation(() => Boolean)
  async removeMatiere(@Args('id') idMatiere: number): Promise<boolean> {
    const matiereToDelete = await this.matiereService.getMatiereById(idMatiere);
    const result = await this.matiereService.removeMatiere(matiereToDelete);
    return result ? true : false;
  }
}
