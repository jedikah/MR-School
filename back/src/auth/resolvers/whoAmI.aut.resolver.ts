import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../jwt-auth.guard';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { CurrentUser } from '../currentUserDecorator';
import {AuthPayload} from "../auth.interface";
import {UtilisateurService} from "../../utilisateur/utilisateur.service";

@Resolver('Auth')
export default class WhoAmIResolver {
  constructor(private utilisateurService: UtilisateurService) {
  }
  @Query(() => Utilisateur)
  @UseGuards(GqlAuthGuard)
  async WhoAmI(@CurrentUser() authPayload: AuthPayload) {
    return this.utilisateurService.utilisateurByContact(authPayload.payload.contact)
  }
}
