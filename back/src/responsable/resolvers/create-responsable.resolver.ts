import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponsableService } from 'src/responsable/responsable.service';
import { Responsable } from 'src/responsable/responsable.entity';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { CryptService } from 'src/utils/crypt.service';
import { FonctionService } from 'src/fonction/fonction.service';
import { AvoirService } from 'src/avoir/avoir.service';
import { Avoir } from 'src/avoir/avoir.entity';
import { ResponsableInput } from '../responsable.type';
import { Fonction } from 'src/fonction/fonction.entity';
import { FonctionInput } from 'src/fonction/fonction.type';
import { UtilisateurInput } from '../../utilisateur/utilisateur.type';

@Resolver()
export class CreateResponsableResolver {
  constructor(
    private utilisateurService: UtilisateurService,
    private responsableService: ResponsableService,
    private cryptService: CryptService,
    private fonctionService: FonctionService,
    private avoirService: AvoirService,
  ) {}

  @Mutation(() => Responsable)
  async createResponsable(
    @Args('input') input: ResponsableInput,
  ): Promise<Responsable> {
    let mdpHash: string = null;
    const utilisateur = new Utilisateur();
    const responsable = new Responsable();
    const newAvoir = new Avoir();
    let fonction;

    if (input.fonction.designation === 'SU') {
      const newFonction = new Fonction();
      Object.assign<Fonction, FonctionInput>(newFonction, input.fonction);

      await this.fonctionService.createFonction(newFonction);
    }

    const isResponsableExist = await this.utilisateurService.utilisateurByContact(
      input.utilisateur.contact,
    );

    if (!isResponsableExist) {
      mdpHash = await this.cryptService.hash(input.utilisateur.motDePasse);

      //creer utilisateur
      Object.assign<Utilisateur, UtilisateurInput>(utilisateur, {
        ...input.utilisateur,
        motDePasse: mdpHash,
      });
      const createdUtilisateur = await this.utilisateurService.createUtilisateur(
        utilisateur,
      );

      // creer responsable
      responsable.utilisateur = createdUtilisateur;
      await this.responsableService.createResponsable(responsable);

      // obtenir fonction
      fonction = await this.fonctionService.fonctionByDesignation(
        input.fonction.designation,
      );

      // associer responsable à une fonction
      Object.assign<Avoir, Avoir>(newAvoir, {
        fonction: fonction,
        responsable,
      });
      await this.avoirService.createAvoir(newAvoir);
    } else
      throw new HttpException(
        `Ce contact est déja utilisé par un responsable.`,
        HttpStatus.UNAUTHORIZED,
      );

    return responsable;
  }
}
