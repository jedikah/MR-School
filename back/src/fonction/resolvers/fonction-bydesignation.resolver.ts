import {
  Resolver,
  Args,
  Query,
  PartialType,
  ObjectType,
} from '@nestjs/graphql';
import { FonctionService } from '../fonction.service';
import { Fonction } from '../fonction.entity';

@ObjectType()
export class FonctionByDesignationOutput extends PartialType(
  Fonction,
  ObjectType,
) {}

@Resolver(of => Function)
export class FonctionByDesignationResolver {
  constructor(private fonctionService: FonctionService) {}

  @Query(() => FonctionByDesignationOutput)
  fonctionByDesignation(
    @Args('input') input: string,
  ): Promise<FonctionByDesignationOutput> {
    return this.fonctionService.fonctionByDesignation(input);
  }
}
