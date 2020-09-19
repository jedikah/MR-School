import { Test, TestingModule } from '@nestjs/testing';
import { NiveauResolverFieldsResolver } from './niveau-resolver-fields.resolver';

describe('ResolverFieldsResolver', () => {
  let resolver: NiveauResolverFieldsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NiveauResolverFieldsResolver],
    }).compile();

    resolver = module.get<NiveauResolverFieldsResolver>(NiveauResolverFieldsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
