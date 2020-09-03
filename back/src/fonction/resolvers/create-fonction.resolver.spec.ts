import { Test, TestingModule } from '@nestjs/testing';
import { CreateFonctionResolver } from './create-fonction.resolver';

describe('CreateFonctionResolver', () => {
  let resolver: CreateFonctionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFonctionResolver],
    }).compile();

    resolver = module.get<CreateFonctionResolver>(CreateFonctionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
