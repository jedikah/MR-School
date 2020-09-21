import { Test, TestingModule } from '@nestjs/testing';
import { ClasseSectionService } from './classe-section.service';

describe('SectionSectionService', () => {
  let service: ClasseSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasseSectionService],
    }).compile();

    service = module.get<ClasseSectionService>(ClasseSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
