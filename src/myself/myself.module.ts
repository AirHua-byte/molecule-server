import { Module } from '@nestjs/common';
import { MyselfService } from './myself.service';
import { MyselfController } from './myself.controller';

@Module({
  controllers: [MyselfController],
  providers: [MyselfService],
})
export class MyselfModule {}
