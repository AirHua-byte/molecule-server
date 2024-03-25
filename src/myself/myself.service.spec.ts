import { Test, TestingModule } from '@nestjs/testing';
import { MyselfService } from './myself.service';

describe('MyselfService', () => {
  let service: MyselfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyselfService],
    }).compile();

    service = module.get<MyselfService>(MyselfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
