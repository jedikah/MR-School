import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Responsable } from './responsable.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResponsableService {
  constructor(
    @InjectRepository(Responsable)
    private responsableRepository: Repository<Responsable>,
  ) {}

  createResponsable(newResponsable: Responsable): Promise<Responsable> {
    return this.responsableRepository.save(newResponsable);
  }
}
