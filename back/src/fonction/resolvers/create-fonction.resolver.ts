import {
  Resolver,
  Mutation,
  Args,
  PickType,
  InputType,
  ObjectType,
  PartialType,
} from '@nestjs/graphql';
import { FonctionService } from '../fonction.service';
import { Fonction } from '../fonction.entity';

@InputType()
export class CreateFonctionInput extends PickType(Fonction, [
  'designation',
] as const) {}

@ObjectType()
export class CreateFonctionOutput extends PartialType(Fonction, ObjectType) {}

@Resolver()
export class CreateFonctionResolver {
  constructor(private fonctionServices: FonctionService) {}

  @Mutation(() => CreateFonctionOutput)
  async createFonction(
    @Args('input') input: CreateFonctionInput,
  ): Promise<CreateFonctionOutput> {
    return await this.fonctionServices.createFonction(input);
  }
}
