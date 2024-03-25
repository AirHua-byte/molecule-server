import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnvelopeService } from './envelope.service';
import { CreateEnvelopeDto } from './dto/create-envelope.dto';
import { UpdateEnvelopeDto } from './dto/update-envelope.dto';

@Controller('envelope')
export class EnvelopeController {
  constructor(private readonly envelopeService: EnvelopeService) {}

  @Post()
  create(@Body() createEnvelopeDto: CreateEnvelopeDto) {
    return this.envelopeService.create(createEnvelopeDto);
  }

  @Get()
  findAll() {
    return this.envelopeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.envelopeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnvelopeDto: UpdateEnvelopeDto) {
    return this.envelopeService.update(+id, updateEnvelopeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.envelopeService.remove(+id);
  }
}
