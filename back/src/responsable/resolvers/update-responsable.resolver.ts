import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Avoir } from '../../avoir/avoir.entity';
import { AvoirService } from '../../avoir/avoir.service';
import { FonctionService } from '../../fonction/fonction.service';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { UtilisateurUpdateInput } from '../../utilisateur/utilisateur.type';
import { Responsable } from '../responsable.entity';
import { ResponsableService } from '../responsable.service';
import { ResponsableUpdateInput } from '../responsable.type';

@Resolver()
export class UpdateResponsableResolver {
  constructor(
    private responsableService: ResponsableService,
    private utilisateurService: UtilisateurService,
    private avoirService: AvoirService,
    private fonctionServise: FonctionService,
  ) {}

  // @Mutation(() => Responsable)
  @Mutation(() => Responsable)
  async updateResponsable(
    @Args('input') input: ResponsableUpdateInput,
  ): Promise<Responsable> {
    const responsable = await this.responsableService.responsableByUtilisateur({
      id: input.idResponsable,
    } as Utilisateur);

    if (responsable) {
      const updatedUtilisateur = new Utilisateur();
      Object.assign<Utilisateur, UtilisateurUpdateInput>(updatedUtilisateur, {
        ...input.utilisateur,
      });

      updatedUtilisateur.id = responsable.utilisateur.id;

      const utilisateur = await this.utilisateurService.updateUtilisateur(
        updatedUtilisateur,
      );

      const fonctions = await this.fonctionServise.fonctions();
      const setResponsableFonction = input.fonctions;
      const unSetResponsableFonction = fonctions.filter(fonction =>
        setResponsableFonction.some(f => f.id === fonction.id) ? false : true,
      );

      await Promise.all(
        unSetResponsableFonction.map(async fonction => {
          const isExist = await this.avoirService.checkAvoir(
            fonction,
            responsable,
          );

          if (isExist)
            await this.avoirService.deletAvoir(fonction, responsable);
        }),
      );

      await Promise.all(
        setResponsableFonction.map(async fonction => {
          const isExist = await this.avoirService.checkAvoir(
            fonction,
            responsable,
          );

          if (!isExist) {
            const avoir = new Avoir();
            avoir.fonction = fonction;
            avoir.responsable = { utilisateur } as Responsable;

            await this.avoirService.createAvoir(avoir);
          }
        }),
      );
    }

    responsable.fonctions = input.fonctions;

    return responsable;
  }
}
