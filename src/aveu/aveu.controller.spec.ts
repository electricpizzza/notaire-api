import { Test, TestingModule } from '@nestjs/testing';
import { AveuController } from './aveu.controller';

describe('AveuController', () => {
  let controller: AveuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AveuController],
    }).compile();

    controller = module.get<AveuController>(AveuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
