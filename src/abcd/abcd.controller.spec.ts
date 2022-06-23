import { Test, TestingModule } from '@nestjs/testing';
import { AbcdController } from './abcd.controller';

describe('AbcdController', () => {
  let controller: AbcdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbcdController],
    }).compile();

    controller = module.get<AbcdController>(AbcdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
