import { ResolveField, Resolver, Root } from '@nestjs/graphql';
import { Responsable } from '../responsable.entity';
import { Fonction } from '../../fonction/fonction.entity';
import { AvoirService } from '../../avoir/avoir.service';
import { FonctionService } from '../../fonction/fonction.service';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';

@Resolver(() => Responsable)
export class ResponsableFieldResolver {
  constructor(
    private avoirService: AvoirService,
    private fonctionService: FonctionService,
    private utilisateurService: UtilisateurService,
  ) {}

  @ResolveField(() => [Fonction])
  async fonctions(@Root() responsable: Responsable): Promise<Fonction[]> {
    const avoirs = await this.avoirService.getResponsableFonctions(responsable);

    return Promise.all(
      avoirs.map(async avoirs => {
        return await this.fonctionService.fonctionById(avoirs.idFonction);
      }),
    );
  }

  @ResolveField(() => Utilisateur)
  async utilisateur(@Root() responsable: Responsable): Promise<Utilisateur> {
    return this.utilisateurService.utilisateurById(responsable.idUtilisateur);
  }
}
