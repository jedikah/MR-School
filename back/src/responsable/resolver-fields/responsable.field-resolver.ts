import { ResolveField, Resolver, Root } from '@nestjs/graphql';
import { Responsable } from '../responsable.entity';
import { Fonction } from '../../fonction/fonction.entity';
import { AvoirService } from '../../avoir/avoir.service';
import { FonctionService } from '../../fonction/fonction.service';

@Resolver(() => Responsable)
export class ResponsableFieldResolver {
  constructor(
    private avoirService: AvoirService,
    private fonctionService: FonctionService,
  ) {}

  @ResolveField(() => [Fonction])
  async fonctions(@Root() responsable: Responsable): Promise<Array<Fonction>> {
    const avoirs = await this.avoirService.getResponsableFonctions(responsable);

    return Promise.all(
      avoirs.map(avoirs => {
        return this.fonctionService.fonctionById(avoirs.idFonction);
      }),
    );
  }
}
