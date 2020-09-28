import { Resolver, ResolveField, Root } from '@nestjs/graphql';

import { EnseignerTable } from '../matiere.type';
import { Matiere } from '../matiere.entity';
import { MatiereUtils } from '../matiere.utils';

@Resolver(() => Matiere)
export class EnseignerTableFieldResolver {
  constructor(private matiereUtils: MatiereUtils) {}

  @ResolveField(() => [EnseignerTable])
  async enseignerTable(@Root() matiere: Matiere): Promise<EnseignerTable[]> {
    return this.matiereUtils.createEnseignerTable(matiere);
  }
}
