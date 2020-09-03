import {
  Resolver,
  Mutation,
  Args,
  InputType,
  Field,
  ObjectType,
} from '@nestjs/graphql';

import { UtilisateurService } from '../utilisateur.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponsableService } from 'src/responsable/responsable.service';
import { Responsable } from 'src/responsable/responsable.entity';
import { Utilisateur } from '../utilisateur.entity';
import { CryptService } from 'src/utils/crypt.service';
import { FonctionService } from 'src/fonction/fonction.service';
import { CreateFonctionInput } from '../../fonction/resolvers/create-fonction.resolver';
import { AvoirService } from 'src/avoir/avoir.service';
import { Avoir } from 'src/avoir/avoir.entity';
import { Fonction } from 'src/fonction/fonction.entity';
import { Eleve } from 'src/eleve/eleve.entity';
import { EleveService } from 'src/eleve/eleve.service';

@InputType()
export class CreateAccountInput {
  @Field(() => Utilisateur)
  utilisateur: Utilisateur;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  fonction?: CreateFonctionInput;

  @Field(() => Eleve, { nullable: true })
  eleve?: Eleve;
}

@Resolver()
export class CreateAccountResolver {
  constructor(
    private utilisateurService: UtilisateurService,
    private responsableService: ResponsableService,
    private cryptService: CryptService,
    private fonctionService: FonctionService,
    private avoirService: AvoirService,
    private eleveService: EleveService,
  ) {}

  @Mutation(() => String)
  async createAccount(
    @Args('input') input: CreateAccountInput,
  ): Promise<string> {
    const count = await this.utilisateurService.nombreUtalisateur();
    const errorMessage = [];
    let mdpHash: string = null;

    if (count <= 0) {
      input.type = 'responsable';

      Object.assign<CreateAccountInput, CreateAccountInput>(input, {
        ...input,
        fonction: { designation: 'SU' },
      });

      await this.fonctionService.createFonction(input.fonction);
    } else {
      if (!input.type)
        errorMessage[0] = `L'utilisateur doit être de type "responsable" ou "eleve".`;

      if (!input.fonction && input.type === 'responsable')
        errorMessage[1] = `L'utilisateur doit une fonction si le type est responsable`;

      if (!input.type || (!input.fonction && input.type === 'responsable'))
        throw new HttpException(errorMessage, HttpStatus.EXPECTATION_FAILED);
    }

    mdpHash = await this.cryptService.hash(input.utilisateur.motDePasse);

    const utilisateur = new Utilisateur();

    Object.assign<Utilisateur, Utilisateur>(utilisateur, {
      ...input.utilisateur,
      motDePasse: mdpHash,
    });

    const createdUtilisateur = await this.utilisateurService.createUtilisateur(
      utilisateur,
    );

    if (input.type === 'responsable') {
      const responsable = new Responsable();
      responsable.utilisater = createdUtilisateur;
      await this.responsableService.createResponsable(responsable);

      console.log({ des: input.fonction.designation });

      const fonction = await this.fonctionService.fonctionByDesignation(
        input.fonction.designation,
      );

      const newAvoir = new Avoir();
      Object.assign<Avoir, Avoir>(newAvoir, {
        fonction: fonction,
        responsable,
      });
      await this.avoirService.createAvoir(newAvoir);
    }

    if (input.type === 'eleve') {
      Object.assign<CreateAccountInput, CreateAccountInput>(input, {
        ...input,
        eleve: { ...input.eleve, utilisater: createdUtilisateur },
      });

      await this.eleveService.createEleve(input.eleve);
    }

    return input.utilisateur.motDePasse;
  }
}
