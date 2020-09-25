import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Avoir } from './avoir.entity';
import { DeleteResult, Repository } from 'typeorm';
import { Responsable } from '../responsable/responsable.entity';
import { Fonction } from '../fonction/fonction.entity';

@Injectable()
export class AvoirService {
  constructor(
    @InjectRepository(Avoir) private avoirRepository: Repository<Avoir>,
  ) {}

  createAvoir(newAvoir: Avoir): Promise<Avoir> {
    return this.avoirRepository.save(newAvoir);
  }

  getResponsableFonctions(responsable: Responsable): Promise<Avoir[]> {
    return this.avoirRepository.find({ where: { responsable } });
  }

  checkAvoir(fonction: Fonction, responsable: Responsable): Promise<Avoir> {
    return this.avoirRepository.findOne({
      where: {
        fonction,
        responsable,
      },
    });
  }

  deletAvoir(
    fonction: Fonction,
    responsable: Responsable,
  ): Promise<DeleteResult> {
    return this.avoirRepository.delete({ fonction, responsable });
  }
}
