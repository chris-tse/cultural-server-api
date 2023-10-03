import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
import { SkillsController } from './skills/skills.controller'
import { SkillsModule } from './skills/skills.module'
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
  controllers: [AppController, SkillsController],
  providers: [AppService, SkillsService],
})
export class AppModule {}
