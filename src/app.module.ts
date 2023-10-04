import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'
import { SkillsModule } from './skills/skills.module'
import { SkillsController } from './skills/skills.controller'
import { SkillsService } from './skills/skills.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      isGlobal: true,
    }),
    DatabaseModule,
    SkillsModule,
  ],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class AppModule {}
