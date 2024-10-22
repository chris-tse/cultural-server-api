import type { SkillsService } from './skills.service';
import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';

import { ApiQuery, ApiTags } from '@nestjs/swagger';

const SkillCategory = ['frontend', 'backend', 'language', 'database'] as const;
type SkillCategory = (typeof SkillCategory)[number];

@ApiTags('skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  @ApiQuery({
    name: 'filter',
    description: 'Skill category to filter by',
    example: 'frontend',
    required: false,
  })
  findAll(@Query('filter') filter?: SkillCategory) {
    console.log(filter);
    if (!filter) {
      return this.skillsService.findAll();
    }

    switch (filter) {
      case 'frontend':
        return this.skillsService.findAllFrontend();
      case 'backend':
        return this.skillsService.findAllBackend();
      case 'language':
        return this.skillsService.findAllLanguages();
      case 'database':
        return this.skillsService.findAllDatabases();
      default:
        throw new HttpException(
          `Invalid filter key. Available filter keys: ['frontend', 'backend', 'language', 'database']`,
          HttpStatus.BAD_REQUEST,
        );
    }
  }
}
