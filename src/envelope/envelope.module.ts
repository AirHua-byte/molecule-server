import { Module } from '@nestjs/common';
import { EnvelopeService } from './envelope.service';
import { EnvelopeController } from './envelope.controller';

@Module({
  controllers: [EnvelopeController],
  providers: [EnvelopeService],
})
export class EnvelopeModule {}
