import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

import { Coefficient } from './coefficient.entity';
import { Matiere } from '../matiere/matiere.entity';

@Injectable()
export class CoefficientService {
  constructor(
    @InjectRepository(Coefficient)
    private coefficientRepository: Repository<Coefficient>,
  ) {}

  getAllCoefficients(): Promise<Coefficient[]> {
    return this.coefficientRepository.find();
  }

  getCoefficientsByMatiere(matiere: Matiere): Promise<Coefficient[]> {
    return this.coefficientRepository.find({ where: { matiere } });
  }

  createOrUpdateCoefficient(coefficient: Coefficient): Promise<Coefficient> {
    return this.coefficientRepository.save(coefficient);
  }

  deleteCoefficients(
    classeIds: number[],
    matiereId: number,
  ): Promise<DeleteResult> {
    const qb = this.coefficientRepository.createQueryBuilder();
    if (!classeIds.length)
      return qb
        .delete()
        .where('matiere = :matiereId', { matiereId })
        .execute();
    return qb
      .delete()
      .where('matiere = :matiereId', { matiereId })
      .andWhere('classe NOT IN (:...classeIds)', { classeIds })
      .execute();
  }
}
