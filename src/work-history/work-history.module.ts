import { Module } from '@nestjs/common'
import { WorkHistoryService } from './work-history.service'
import { WorkHistoryController } from './work-history.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WorkHistory } from './entities/work-history.entity'

@Module({
  imports: [TypeOrmModule.forFeature([WorkHistory])],
  exports: [TypeOrmModule],
  controllers: [WorkHistoryController],
  providers: [WorkHistoryService],
})
export class WorkHistoryModule {}
