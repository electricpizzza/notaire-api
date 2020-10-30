import { Test, TestingModule } from '@nestjs/testing';
import { ActeService } from './acte.service';

describe('ActeService', () => {
  let service: ActeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActeService],
    }).compile();

    service = module.get<ActeService>(ActeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
