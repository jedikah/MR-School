import { Test, TestingModule } from '@nestjs/testing';
import { CreateEleveResolver } from './create-eleve.resolver';

describe('CreateAccountResolver', () => {
  let resolver: CreateEleveResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateEleveResolver],
    }).compile();

    resolver = module.get<CreateEleveResolver>(CreateEleveResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
