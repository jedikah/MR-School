import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Responsable } from './responsable.entity';
import { Like, Repository, SelectQueryBuilder } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Utilisateur } from '../utilisateur/utilisateur.entity';

@Injectable()
export class ResponsableService {
  constructor(
    @InjectRepository(Responsable)
    private readonly responsableRepository: Repository<Responsable>,
  ) {}

  createResponsable(newResponsable: Responsable): Promise<Responsable> {
    return this.responsableRepository.save(newResponsable);
  }

  getAllResponsables(): Promise<Responsable[]> {
    return this.responsableRepository.find({ relations: ['utilisateur'] });
  }

  searchResponsableById(id: number): Promise<Responsable> {
    return this.responsableRepository.findOne({
      where: { utilisateur: { id } },
    });
  }

  searchResponsableByContact(contact: string): Promise<Responsable[]> {
    return this.responsableRepository.find({
      relations: ['utilisateur'],
      where: (qb: SelectQueryBuilder<Utilisateur>) => {
        qb.where('contact like :contact', {
          contact: '%' + contact + '%',
        });
      },
    });
  }
}
