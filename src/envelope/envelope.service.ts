import { Injectable } from '@nestjs/common';
import { CreateEnvelopeDto } from './dto/create-envelope.dto';
import { UpdateEnvelopeDto } from './dto/update-envelope.dto';

@Injectable()
export class EnvelopeService {
  create(createEnvelopeDto: CreateEnvelopeDto) {
    return 'This action adds a new envelope';
  }

  findAll() {
    return `This action returns all envelope`;
  }

  findOne(id: number) {
    return `This action returns a #${id} envelope`;
  }

  update(id: number, updateEnvelopeDto: UpdateEnvelopeDto) {
    return `This action updates a #${id} envelope`;
  }

  remove(id: number) {
    return `This action removes a #${id} envelope`;
  }
}
