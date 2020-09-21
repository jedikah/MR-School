import { Test, TestingModule } from '@nestjs/testing';
import { CreateClassificationResolver } from './create-classification.resolver';

describe('ClassificationResolver', () => {
  let resolver: CreateClassificationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateClassificationResolver],
    }).compile();

    resolver = module.get<CreateClassificationResolver>(CreateClassificationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
