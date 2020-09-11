import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../jwt-auth.guard';
import { Utilisateur } from '../../utilisateur/utilisateur.entity';
import { CurrentUser } from '../currentUserDecorator';

@Resolver('Auth')
export default class WhoAmIResolver {

  @Query(() => Utilisateur)
  @UseGuards(GqlAuthGuard)
  async WhoAmI(@CurrentUser() user: Utilisateur) {
    return user
  }
}
