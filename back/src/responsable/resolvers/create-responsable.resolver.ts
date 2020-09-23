import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
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
import { GqlAuthGuard } from '../../auth/jwt-auth.guard';
import { GeneratePassword } from '../../utils/generate_password';

@Resolver()
export class CreateResponsableResolver {
  constructor(
    private utilisateurService: UtilisateurService,
    private responsableService: ResponsableService,
    private cryptService: CryptService,
    private fonctionService: FonctionService,
    private avoirService: AvoirService,
    private generatePassword: GeneratePassword,
  ) {}

  @Mutation(() => Responsable)
  @UseGuards(GqlAuthGuard)
  async createResponsable(
    @Args('input') input: CreateResponsableInput,
  ): Promise<Responsable> {
    const mdp: string = this.generatePassword.makePassword();
    let mdpHash: string = null;
    const newResponsable = new Responsable();
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
      mdpHash = await this.cryptService.hash(mdp);

      //creer utilisateur
      const utilisateur = new Utilisateur();
      Object.assign<Utilisateur, UtilisateurInput>(utilisateur, {
        ...input.utilisateur,
        motDePasse: mdpHash,
      });
      const createdUtilisateur = await this.utilisateurService.createUtilisateur(
        utilisateur,
      );

      // creer responsable
      newResponsable.utilisateur = createdUtilisateur;
      await this.responsableService.createResponsable(newResponsable);

      // obtenir fonction
      fonction = await this.fonctionService.fonctionByDesignation(
        input.fonction.designation,
      );

      // associer responsable à une fonction
      Object.assign<Avoir, Avoir>(newAvoir, {
        fonction: fonction,
        responsable: newResponsable,
      });
      await this.avoirService.createAvoir(newAvoir);

      newResponsable.utilisateur.motDePasse = mdp;
    } else
      throw new HttpException(
        `Ce contact est déja utilisé par un responsable.`,
        HttpStatus.UNAUTHORIZED,
      );

    return newResponsable;
  }
}
