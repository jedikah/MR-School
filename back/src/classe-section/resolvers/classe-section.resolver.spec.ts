import { Test, TestingModule } from '@nestjs/testing';
import { ClasseSectionResolver } from './classe-section.resolver';

describe('SectionNiveauResolver', () => {
  let resolver: ClasseSectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasseSectionResolver],
    }).compile();

    resolver = module.get<ClasseSectionResolver>(ClasseSectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
