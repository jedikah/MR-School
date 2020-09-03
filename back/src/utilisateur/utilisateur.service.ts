import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Utilisateur } from './utilisateur.entity';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateurRepositoery: Repository<Utilisateur>,
  ) {}

  nombreUtalisateur(): Promise<number> {
    return this.utilisateurRepositoery.count();
  }

  createUtilisateur(newUtilisateur: Utilisateur): Promise<Utilisateur> {
    return this.utilisateurRepositoery.save(newUtilisateur);
  }
}
