import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { FonctionService } from '../fonction.service';
import { Fonction } from '../fonction.entity';
import { FonctionInput } from '../fonction.type';

@Resolver()
export class CreateFonctionResolver {
  constructor(private fonctionServices: FonctionService) {}

  @Mutation(() => Fonction)
  async createFonction(@Args('input') input: FonctionInput): Promise<Fonction> {
    const newFonction = new Fonction();
    Object.assign<Fonction, FonctionInput>(newFonction, input);
    return await this.fonctionServices.createFonction(newFonction);
  }
}
