import { Test, TestingModule } from '@nestjs/testing';
import { ListClassByNiveauResolver } from './list-class-by-niveau.resolver';

describe('NiveauResolver', () => {
  let resolver: ListClassByNiveauResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListClassByNiveauResolver],
    }).compile();

    resolver = module.get<ListClassByNiveauResolver>(ListClassByNiveauResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
