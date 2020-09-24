import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
