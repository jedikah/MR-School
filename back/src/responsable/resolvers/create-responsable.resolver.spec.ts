import { Test, TestingModule } from '@nestjs/testing';
import { CreateResponsableResolver } from './create-responsable.resolver';

describe('CreateAccountResolver', () => {
  let resolver: CreateResponsableResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateResponsableResolver],
    }).compile();

    resolver = module.get<CreateResponsableResolver>(CreateResponsableResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
