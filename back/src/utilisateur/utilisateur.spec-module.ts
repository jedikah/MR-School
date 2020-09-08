import { UtilisateurService } from './utilisateur.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur.entity';

export class UtilisateurRepositoryFake {
  public async count(): Promise<number> {
    return 10;
  }
}

export const utilisateurSpecModule = (): Promise<TestingModule> =>
  Test.createTestingModule({
    providers: [
      UtilisateurService,
      {
        provide: getRepositoryToken(Utilisateur),
        useClass: UtilisateurRepositoryFake,
      },
    ],
  }).compile();
