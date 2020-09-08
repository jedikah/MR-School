import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Avoir } from './avoir.entity';
import { Repository } from 'typeorm';
import { Responsable } from 'src/responsable/responsable.entity';

@Injectable()
export class AvoirService {
  constructor(
    @InjectRepository(Avoir) private avoirRepository: Repository<Avoir>,
  ) {}

  createAvoir(newAvoir: Avoir): Promise<Avoir> {
    return this.avoirRepository.save(newAvoir);
  }

  getResponsableFonctions(responsable: Responsable): Promise<Avoir[]> {
    return this.avoirRepository.find({ where: [{ responsable }] });
  }
}
