import { Test, TestingModule } from '@nestjs/testing';
import { AveuService } from './aveu.service';

describe('AveuService', () => {
  let service: AveuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AveuService],
    }).compile();

    service = module.get<AveuService>(AveuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
