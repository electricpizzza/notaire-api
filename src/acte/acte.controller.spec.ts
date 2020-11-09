import { Test, TestingModule } from '@nestjs/testing';
import { ActeController } from './acte.controller';

describe('ActeController', () => {
  let controller: ActeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActeController],
    }).compile();

    controller = module.get<ActeController>(ActeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
