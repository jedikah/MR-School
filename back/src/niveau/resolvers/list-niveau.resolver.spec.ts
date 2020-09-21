import { Test, TestingModule } from '@nestjs/testing';
import { ListNiveauResolver } from './list-niveau.resolver';

describe('NiveauResolver', () => {
  let resolver: ListNiveauResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListNiveauResolver],
    }).compile();

    resolver = module.get<ListNiveauResolver>(ListNiveauResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
