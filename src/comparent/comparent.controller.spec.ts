import { Test, TestingModule } from '@nestjs/testing';
import { ComparentController } from './comparent.controller';

describe('ComparentController', () => {
  let controller: ComparentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComparentController],
    }).compile();

    controller = module.get<ComparentController>(ComparentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
