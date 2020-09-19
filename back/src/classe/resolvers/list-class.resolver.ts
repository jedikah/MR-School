import { Query, Resolver } from '@nestjs/graphql';
import { ClasseService } from '../classe.service';
import { Classe } from '../classe.entity';

@Resolver()
export class ListClassResolver {
  constructor(private classeService: ClasseService) {}

  @Query(() => [Classe])
  async getAllClasses(): Promise<Classe[]> {
    return await this.classeService.getAllClasses();
  }
}
