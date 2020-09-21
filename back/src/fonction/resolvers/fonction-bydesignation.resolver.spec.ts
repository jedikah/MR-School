import { Test, TestingModule } from '@nestjs/testing';
import { FonctionByDesignationResolver } from './fonction-bydesignation.resolver';

describe('FonctionByDesignationResolver', () => {
  let resolver: FonctionByDesignationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FonctionByDesignationResolver],
    }).compile();

    resolver = module.get<FonctionByDesignationResolver>(
      FonctionByDesignationResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
