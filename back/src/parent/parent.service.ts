import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { Parent } from './parent.entity';
import { ParentInput } from './parent.type';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private ParentRepository: Repository<Parent>,
  ) {}

  ParentByContact(contact: string): Promise<Parent> {
    return this.ParentRepository.findOne({ where: [{ contact }] });
  }

  ParentLikeContact(contact: string): Promise<Parent[]> {
    return this.ParentRepository.find({ contact: Like('%' + contact + '%') });
  }

  ParentById(id: number): Promise<Parent> {
    return this.ParentRepository.findOne({ where: [{ id }] });
  }

  nombreParent(): Promise<number> {
    return this.ParentRepository.count();
  }

  createParent(newParent: ParentInput): Promise<Parent> {
    return this.ParentRepository.save(newParent);
  }

  updateParent(newParent: Parent): Promise<Parent> {
    return this.ParentRepository.save(newParent);
  }
}
