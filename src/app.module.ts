import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'
import { SkillsModule } from './skills/skills.module'
import { SkillsController } from './skills/skills.controller'
import { SkillsService } from './skills/skills.service'
import { WorkHistoryModule } from './work-history/work-history.module'
import { WorkHistoryController } from './work-history/work-history.controller'
import { WorkHistoryService } from './work-history/work-history.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      isGlobal: true,
    }),
    DatabaseModule,
    SkillsModule,
    WorkHistoryModule,
  ],
  controllers: [SkillsController, WorkHistoryController],
  providers: [SkillsService, WorkHistoryService],
})
export class AppModule {}
