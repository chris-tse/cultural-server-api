import { Controller, Get } from '@nestjs/common'
import { SkillsService } from './skills.service'
import { Skill } from '../entities/skills.entity'
import { ApiResponse, ApiTags } from '@nestjs/swagger'

@Controller('skills')
@ApiTags('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List all skills',
    type: Skill,
  })
  async getSkills(): Promise<Skill[]> {
    return this.skillsService.findAll()
  }
}
