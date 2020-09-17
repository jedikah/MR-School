import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

import { Eleve } from './eleve.entity';

@Injectable()
export class EleveService {
  constructor(
    @InjectRepository(Eleve)
    private eleveRepository: Repository<Eleve>,
  ) {}

  async paginate(
    qb: SelectQueryBuilder<Eleve>,
    options: IPaginationOptions,
  ): Promise<Pagination<Eleve>> {
    return paginate<Eleve>(qb, options);
  }

  createEleve(newEleve: Eleve): Promise<Eleve> {
    return this.eleveRepository.save(newEleve);
  }

  updateEleve(newEleve: Eleve): Promise<Eleve> {
    return this.eleveRepository.save(newEleve);
  }

  eleveByMatricule(matricule: string): Promise<Eleve> {
    return this.eleveRepository.findOne({
      where: { matricule },
    });
  }

  getAllEleves(): SelectQueryBuilder<Eleve> {
    return this.eleveRepository.createQueryBuilder('eleve');
  }

  searchEleveByMatricule(matricule: string): SelectQueryBuilder<Eleve> {
    return this.eleveRepository
      .createQueryBuilder('eleve')
      .where('eleve.matricule like :matricule', {
        matricule: `%${matricule}%`,
      });
  }
}
