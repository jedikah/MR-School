import { Test, TestingModule } from '@nestjs/testing';
import { UpdateAnneeScolaireResolver } from './update-annee-scolaire.resolver';

describe('UpdateAnneeScolaireResolver', () => {
  let resolver: UpdateAnneeScolaireResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateAnneeScolaireResolver],
    }).compile();

    resolver = module.get<UpdateAnneeScolaireResolver>(UpdateAnneeScolaireResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
