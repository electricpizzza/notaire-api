import { Test, TestingModule } from '@nestjs/testing';
import { ComparentService } from './comparent.service';

describe('ComparentService', () => {
  let service: ComparentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComparentService],
    }).compile();

    service = module.get<ComparentService>(ComparentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
