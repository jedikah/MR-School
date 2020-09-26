import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enseigner } from './enseigner.entity';
import { Repository } from 'typeorm';
import { Classe } from '../classe/classe.entity';
import { Section } from '../section/section.entity';
import { Matiere } from '../matiere/matiere.entity';

@Injectable()
export class EnseignerService {
  constructor(
    @InjectRepository(Enseigner)
    private enseignerRepository: Repository<Enseigner>,
  ) {}

  isClasseSectionIn(
    classe: Classe,
    section: Section,
    matiere: Matiere,
  ): Promise<Enseigner> {
    return this.enseignerRepository.findOne({
      where: {
        classe,
        section,
        matiere,
      },
    });
  }
}
