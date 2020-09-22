import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { MatiereService } from '../matiere.service';
import { Matiere } from '../matiere.entity';
import { CreateMatiereResult, CreateMatiereError } from '../matiere.type';

@Resolver()
export class CreateMatiereResolver {
  constructor(private matiereService: MatiereService) {}

  @Mutation(() => CreateMatiereResult)
  async createMatiere(
    @Args('designation') designation: string,
  ): Promise<typeof CreateMatiereResult> {
    const isMatiereExist = await this.matiereService.getMatiereByDesignation(
      designation,
    );
    if (isMatiereExist) {
      const error = new CreateMatiereError();
      error.designationAlreadyExist = 'La matiere existe deja';
      return error;
    }

    const newMatiere = new Matiere();
    newMatiere.designation = designation;
    return this.matiereService.createOrSaveMatiere(newMatiere);
  }
}
