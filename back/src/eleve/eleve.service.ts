import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Eleve } from './eleve.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EleveService {
  constructor(
    @InjectRepository(Eleve) private eleveRepository: Repository<Eleve>,
  ) {}

  createEleve(newEleve: Eleve): Promise<Eleve> {
    return this.eleveRepository.save(newEleve);
  }
}
