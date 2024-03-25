import { PartialType } from '@nestjs/mapped-types';
import { CreateMyselfDto } from './create-myself.dto';

export class UpdateMyselfDto extends PartialType(CreateMyselfDto) {}
