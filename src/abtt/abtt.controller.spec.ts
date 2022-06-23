import { Test, TestingModule } from '@nestjs/testing';
import { AbttController } from './abtt.controller';

describe('AbttController', () => {
  let controller: AbttController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbttController],
    }).compile();

    controller = module.get<AbttController>(AbttController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
