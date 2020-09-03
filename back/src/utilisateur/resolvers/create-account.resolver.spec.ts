import { Test, TestingModule } from '@nestjs/testing';
import { CreateAccountResolver } from './create-account.resolver';

describe('CreateAccountResolver', () => {
  let resolver: CreateAccountResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateAccountResolver],
    }).compile();

    resolver = module.get<CreateAccountResolver>(CreateAccountResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
