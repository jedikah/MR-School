import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Fonction } from './fonction.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FonctionService {
  constructor(
    @InjectRepository(Fonction)
    private fonctionRepository: Repository<Fonction>,
  ) {}

  createFonction(newFonction: Fonction): Promise<Fonction> {
    return this.fonctionRepository.save(newFonction);
  }

  fonctionByDesignation(designation: string): Promise<Fonction> {
    return this.fonctionRepository.findOne({ where: [{ designation }] });
  }

  fonctionById(id: number): Promise<Fonction> {
    return this.fonctionRepository.findOne({ where: [{ id }] });
  }

  fonctions(): Promise<Fonction[]> {
    return this.fonctionRepository.find();
  }
}
