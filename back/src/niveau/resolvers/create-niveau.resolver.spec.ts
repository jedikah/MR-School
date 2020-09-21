import { Test, TestingModule } from '@nestjs/testing';
import { CreateNiveauResolver } from './create-niveau.resolver';

describe('NiveauResolver', () => {
  let resolver: CreateNiveauResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateNiveauResolver],
    }).compile();

    resolver = module.get<CreateNiveauResolver>(CreateNiveauResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
