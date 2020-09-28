import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enseigner } from './enseigner.entity';
import { Repository, DeleteResult } from 'typeorm';
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
  ): Promise<Enseigner[]> {
    return this.enseignerRepository.find({
      where: {
        classe,
        section,
        matiere,
      },
    });
  }

  createOrUpdateEnseigner(enseigner: Enseigner): Promise<Enseigner> {
    return this.enseignerRepository.save(enseigner);
  }

  removeEnseigner(ens: Enseigner): Promise<DeleteResult> {
    return this.enseignerRepository
      .createQueryBuilder()
      .delete()
      .where('matiere = :matiereId', { matiereId: ens.matiereId })
      .andWhere('classe = :classeId', { classeId: ens.classeId })
      .andWhere('section = :sectionId', { sectionId: ens.sectionId })
      .execute();
  }
}
