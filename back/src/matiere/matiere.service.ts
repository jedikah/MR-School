import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Matiere } from './matiere.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MatiereService {
  constructor(
    @InjectRepository(Matiere)
    private matiereRepository: Repository<Matiere>,
  ) {}

  getMatiereByDesignation(designation: string): Promise<Matiere> {
    return this.matiereRepository.findOne({ where: { designation } });
  }

  createMatiere(matiere: Matiere): Promise<Matiere> {
    return this.matiereRepository.save(matiere);
  }
}
