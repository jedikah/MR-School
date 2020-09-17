import { Test, TestingModule } from '@nestjs/testing';
import { CreateClasseResolver } from './create-classe.resolver';

describe('ResolversResolver', () => {
  let resolver: CreateClasseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateClasseResolver],
    }).compile();

    resolver = module.get<CreateClasseResolver>(CreateClasseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
