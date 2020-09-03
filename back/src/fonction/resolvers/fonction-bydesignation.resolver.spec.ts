import { Test, TestingModule } from '@nestjs/testing';
import { FonctionBydesignationResolver } from './fonction-bydesignation.resolver';

describe('FonctionBydesignationResolver', () => {
  let resolver: FonctionBydesignationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FonctionBydesignationResolver],
    }).compile();

    resolver = module.get<FonctionBydesignationResolver>(FonctionBydesignationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
