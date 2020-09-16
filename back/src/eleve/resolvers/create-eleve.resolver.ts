import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { CryptService } from '../../utils/crypt.service';
import { EleveService } from '../../eleve/eleve.service';
import { CreateEleveInput } from '../eleve.type';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Eleve } from '../eleve.entity';
import { UtilisateurInput } from '../../utilisateur/utilisateur.type';
import { Parent } from '../../parent/parent.entity';
import { ParentService } from '../../parent/parent.service';

@Resolver()
export class CreateEleveResolver {
  constructor(
    private utilisateurService: UtilisateurService,
    private cryptService: CryptService,
    private eleveService: EleveService,
    private parentService: ParentService,
  ) {}

  @Mutation(() => Eleve)
  async createEleve(@Args('input') input: CreateEleveInput): Promise<Eleve> {
    let mdpHash: string = null;
    let newEleve: Eleve;
    const isEleveExist = await this.eleveService.eleveByMatricule(
      input.eleve.matricule,
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

      let parent = await this.parentService.ParentByContact(
        input.parent.contact,
      );

      if (!parent) parent = await this.parentService.createParent(input.parent);

      // creation eleve
      const createEleve = new Eleve();
      Object.assign<Eleve, Omit<Eleve, 'id' | 'idParent' | 'idUtilisateur'>>(
        createEleve,
        {
          ...input.eleve,
          utilisateur: createdUtilisateur,
          parent,
        },
      );

      newEleve = await this.eleveService.createEleve(createEleve);
    } else
      throw new HttpException(
        `Cette élève possede déja un compte.`,
        HttpStatus.UNAUTHORIZED,
      );

    return newEleve;
  }
}
