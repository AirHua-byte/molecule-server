import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyselfService } from './myself.service';
import { CreateMyselfDto } from './dto/create-myself.dto';
import { UpdateMyselfDto } from './dto/update-myself.dto';

@Controller('myself')
export class MyselfController {
  constructor(private readonly myselfService: MyselfService) {}

  @Post()
  create(@Body() createMyselfDto: CreateMyselfDto) {
    return this.myselfService.create(createMyselfDto);
  }

  @Get()
  findAll() {
    return this.myselfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myselfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyselfDto: UpdateMyselfDto) {
    return this.myselfService.update(+id, updateMyselfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myselfService.remove(+id);
  }
}
