import { ResolveField, Resolver, Root } from '@nestjs/graphql';
import { Responsable } from '../responsable.entity';
import { Fonction } from '../../fonction/fonction.entity';
import { AvoirService } from '../../avoir/avoir.service';
import { FonctionService } from '../../fonction/fonction.service';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';

@Resolver(() => Responsable)
export class ResponsableFieldResolver {
  constructor(
    private avoirService: AvoirService,
    private fonctionService: FonctionService,
    private utilisateurService: UtilisateurService,
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

  @ResolveField(() => Utilisateur)
  async utilisateur(@Root() responsable: Responsable): Promise<Utilisateur> {
    return this.utilisateurService.utilisateurById(responsable.idUtilisateur);
  }
}
