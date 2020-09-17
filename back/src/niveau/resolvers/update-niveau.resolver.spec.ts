import { Test, TestingModule } from '@nestjs/testing';
import { UpdateNiveauResolver } from './update-niveau.resolver';

describe('UpdateNiveauResolver', () => {
  let resolver: UpdateNiveauResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateNiveauResolver],
    }).compile();

    resolver = module.get<UpdateNiveauResolver>(UpdateNiveauResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
