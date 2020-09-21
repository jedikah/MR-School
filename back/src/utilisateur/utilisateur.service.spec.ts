import { TestingModule } from '@nestjs/testing';
import { UtilisateurService } from './utilisateur.service';
import { utilisateurSpecModule } from './utilisateur.spec-module';
import { Repository } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UtilisateurService', () => {
  let service: UtilisateurService;
  let utilisateurRepository: Repository<Utilisateur>;

  beforeEach(async () => {
    const module: TestingModule = await utilisateurSpecModule();

    service = module.get<UtilisateurService>(UtilisateurService);
    utilisateurRepository = module.get<Repository<Utilisateur>>(
      getRepositoryToken(Utilisateur),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('nombreUtalisateur', () => {
    it('should return number', async () => {
      const expectedResult = 15;

      const utilisateurRepositoryCountSpy = jest
        .spyOn(utilisateurRepository, 'count')
        .mockResolvedValue(expectedResult);

      const resulte = await service.nombreUtalisateur();
      expect(utilisateurRepositoryCountSpy).toHaveBeenCalled();
      expect(resulte).toBe(expectedResult);
    });
  });
});
