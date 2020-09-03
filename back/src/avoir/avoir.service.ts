import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Avoir } from './avoir.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AvoirService {
  constructor(
    @InjectRepository(Avoir) private avoirRepository: Repository<Avoir>,
  ) {}

  createAvoir(newAvoir: Avoir): Promise<Avoir> {
    return this.avoirRepository.save(newAvoir);
  }
}
