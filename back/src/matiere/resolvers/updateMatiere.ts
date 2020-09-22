import { Resolver, Mutation, Args } from '@nestjs/graphql';

import {
  UpdateMatiereResult,
  UpdateMatiereInput,
  UpdateMatiereError,
} from '../matiere.type';
import { MatiereService } from '../matiere.service';
import { Matiere } from '../matiere.entity';

@Resolver()
export class UpdateMatiereResolver {
  constructor(private matiereService: MatiereService) {}

  @Mutation(() => UpdateMatiereResult)
  async updateMatiere(
    @Args('updateMatiereInput') updateMatiereInput: UpdateMatiereInput,
  ): Promise<typeof UpdateMatiereResult> {
    const isMatiereExist = await this.matiereService.getMatiereByDesignation(
      updateMatiereInput.designation,
    );
    if (isMatiereExist && isMatiereExist.id !== updateMatiereInput.id) {
      const error = new UpdateMatiereError();
      error.matiereAlreadyExist = `La matiere ${updateMatiereInput.designation} existe deja`;
      return error;
    }

    const newMatiere = await this.matiereService.getMatiereById(
      updateMatiereInput.id,
    );
    Object.assign<Matiere, UpdateMatiereInput>(newMatiere, updateMatiereInput);

    return this.matiereService.createOrSaveMatiere(newMatiere);
  }
}
