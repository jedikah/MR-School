import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponsableService } from '../../responsable/responsable.service';
import { Responsable } from '../../responsable/responsable.entity';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { CryptService } from '../../utils/crypt.service';
import { FonctionService } from '../../fonction/fonction.service';
import { AvoirService } from '../../avoir/avoir.service';
import { Avoir } from '../../avoir/avoir.entity';
import { CreateResponsableInput } from '../responsable.type';
import { Fonction } from '../../fonction/fonction.entity';
import { FonctionInput } from '../../fonction/fonction.type';
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
    @Args('input') input: CreateResponsableInput,
  ): Promise<Responsable> {
    let mdpHash: string = null;
    const utilisateur = new Utilisateur();
    const responsable = new Responsable();
    const newAvoir = new Avoir();

    if (input.fonction.designation === 'SU') {
      const newFonction = new Fonction();
      Object.assign<Fonction, FonctionInput>(newFonction, input.fonction);

      await this.fonctionService.createFonction(newFonction);
    }

    let fonction = await this.fonctionService.fonctionByDesignation(
      input.fonction.designation,
    );

    if (!fonction)
      throw new HttpException(
        `La fonction "${input.fonction.designation}" n'existe pas.`,
        HttpStatus.UNAUTHORIZED,
      );

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
