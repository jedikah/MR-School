import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { CryptService } from '../../utils/crypt.service';
import { EleveService } from '../../eleve/eleve.service';
import { EleveInput } from '../eleve.type';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Eleve } from '../eleve.entity';
import { UtilisateurInput } from 'src/utilisateur/utilisateur.type';

@Resolver()
export class CreateEleveResolver {
  constructor(
    private utilisateurService: UtilisateurService,
    private cryptService: CryptService,
    private eleveService: EleveService,
  ) {}

  @Mutation(() => Eleve)
  async createEleve(@Args('input') input: EleveInput): Promise<Eleve> {
    let mdpHash: string = null;
    let newEleve: Eleve;
    const isEleveExist = await this.eleveService.eleveByMatriculeSexe(
      input.matricule,
      input.sexe,
    );

    if (!isEleveExist) {
      mdpHash = await this.cryptService.hash(input.utilisateur.motDePasse);

      //creer utilisateur
      const utilisateur = new Utilisateur();
      Object.assign<Utilisateur, UtilisateurInput>(utilisateur, {
        ...input.utilisateur,
        motDePasse: mdpHash,
      });
      const createdUtilisateur = await this.utilisateurService.createUtilisateur(
        utilisateur,
      );

      // creation eleve
      const createEleve = new Eleve();
      Object.assign<Eleve, Partial<Eleve>>(createEleve, {
        ...input,
        utilisateur: createdUtilisateur,
      });

      newEleve = await this.eleveService.createEleve(createEleve);
    } else
      throw new HttpException(
        `Cette élève possede déja un compte.`,
        HttpStatus.UNAUTHORIZED,
      );

    return newEleve;
  }
}
