import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Responsable } from './responsable.entity';
import { Like, Repository } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class ResponsableService {
  constructor(
    @InjectRepository(Responsable)
    private responsableRepository: Repository<Responsable>,
  ) {}

  async paginate(
    resposables: Promise<Responsable[]>,
    options: IPaginationOptions,
  ): Promise<Pagination<Responsable>> {
    return paginate<Responsable>(this.responsableRepository, options);
  }

  createResponsable(newResponsable: Responsable): Promise<Responsable> {
    return this.responsableRepository.save(newResponsable);
  }

  getAllResponsables(): Promise<Responsable[]> {
    return this.responsableRepository.find();
  }

  searchResponsableByContact(contact: string): Promise<Responsable[]> {
    return this.responsableRepository.find({
      relations: ['responsable', 'utilisateur'],
      where: {
        utilisateur: { contact: Like('%' + contact + '%') },
      },
      join: {
        alias: 'utilisateur',
        innerJoin: {
          id: 'utilisateur.id',
        },
      },
    });
  }
}
