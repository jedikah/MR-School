import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { HttpException, HttpStatus } from '@nestjs/common';

import { UpdateMatiereInput } from '../matiere.type';
import { MatiereService } from '../matiere.service';
import { Matiere } from '../matiere.entity';

@Resolver()
export class UpdateMatiereResolver {
  constructor(private matiereService: MatiereService) {}

  @Mutation(() => Matiere)
  async updateMatiere(
    @Args('updateMatiereInput') updateMatiereInput: UpdateMatiereInput,
  ): Promise<Matiere> {
    const isMatiereExist = await this.matiereService.getMatiereByDesignation(
      updateMatiereInput.designation,
    );
    if (isMatiereExist && isMatiereExist.id !== updateMatiereInput.id) {
      throw new HttpException(
        `La matiere ${isMatiereExist.designation} existe deja`,
        HttpStatus.CONFLICT,
      );
    }

    const newMatiere = await this.matiereService.getMatiereById(
      updateMatiereInput.id,
    );
    Object.assign<Matiere, UpdateMatiereInput>(newMatiere, updateMatiereInput);

    return this.matiereService.createOrSaveMatiere(newMatiere);
  }
}
