import { Test, TestingModule } from '@nestjs/testing';
import { CreateAnneeScolaireResolver } from './create-annee-scolaire.resolver';

describe('AnneeScolaireResolver', () => {
  let resolver: CreateAnneeScolaireResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateAnneeScolaireResolver],
    }).compile();

    resolver = module.get<CreateAnneeScolaireResolver>(CreateAnneeScolaireResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
