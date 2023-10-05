import { PartialType } from '@nestjs/swagger';
import { CreateWorkHistoryDto } from './create-work-history.dto';

export class UpdateWorkHistoryDto extends PartialType(CreateWorkHistoryDto) {}
