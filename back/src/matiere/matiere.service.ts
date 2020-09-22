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

  getMatiereById(id: number): Promise<Matiere> {
    return this.matiereRepository.findOne(id);
  }

  getAllMatieres(): Promise<Matiere[]> {
    return this.matiereRepository.find();
  }

  getMatiereByDesignation(designation: string): Promise<Matiere> {
    return this.matiereRepository.findOne({ where: { designation } });
  }

  createOrSaveMatiere(matiere: Matiere): Promise<Matiere> {
    return this.matiereRepository.save(matiere);
  }
}
