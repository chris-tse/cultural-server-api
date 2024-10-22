import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkHistory } from './entities/work-history.entity';
import { WorkHistoryController } from './work-history.controller';
import { WorkHistoryService } from './work-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkHistory])],
  exports: [TypeOrmModule],
  controllers: [WorkHistoryController],
  providers: [WorkHistoryService],
})
export class WorkHistoryModule {}
