import { Test, TestingModule } from '@nestjs/testing';
import { CreateSectionResolver } from './create-section.resolver';

describe('SectionResolver', () => {
  let resolver: CreateSectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateSectionResolver],
    }).compile();

    resolver = module.get<CreateSectionResolver>(CreateSectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
