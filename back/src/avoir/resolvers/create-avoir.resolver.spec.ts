import { Test, TestingModule } from '@nestjs/testing';
import { CreateAvoirResolver } from './create-avoir.resolver';

describe('CreateAvoirResolver', () => {
  let resolver: CreateAvoirResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateAvoirResolver],
    }).compile();

    resolver = module.get<CreateAvoirResolver>(CreateAvoirResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
