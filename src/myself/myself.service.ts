import { Injectable } from '@nestjs/common';
import { CreateMyselfDto } from './dto/create-myself.dto';
import { UpdateMyselfDto } from './dto/update-myself.dto';

@Injectable()
export class MyselfService {
  create(createMyselfDto: CreateMyselfDto) {
    return 'This action adds a new myself';
  }

  findAll() {
    return `This action returns all myself`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myself`;
  }

  update(id: number, updateMyselfDto: UpdateMyselfDto) {
    return `This action updates a #${id} myself`;
  }

  remove(id: number) {
    return `This action removes a #${id} myself`;
  }
}
