import { Test, TestingModule } from '@nestjs/testing';
import { MyselfController } from './myself.controller';
import { MyselfService } from './myself.service';

describe('MyselfController', () => {
  let controller: MyselfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyselfController],
      providers: [MyselfService],
    }).compile();

    controller = module.get<MyselfController>(MyselfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
