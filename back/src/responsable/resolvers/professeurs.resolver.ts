import { Resolver, Query } from '@nestjs/graphql';

import { AvoirService } from '../../avoir/avoir.service';
import { Responsable } from '../responsable.entity';
import { ResponsableService } from '../responsable.service';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';

@Resolver()
export class ProfesseursResolver {
  constructor(
    private avoirService: AvoirService,
    private responsableService: ResponsableService,
  ) {}

  @Query(() => [Responsable])
  async professeurs(): Promise<Responsable[]> {
    return Promise.all(
      (await this.avoirService.getProfesseurs()).map(avoir => {
        const utilisateur = new Utilisateur();
        utilisateur.id = avoir.idResponsable;
        return this.responsableService.getResponsableById(utilisateur);
      }),
    );
  }
}
