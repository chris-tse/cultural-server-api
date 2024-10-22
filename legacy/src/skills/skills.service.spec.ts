import type { TestingModule } from '@nestjs/testing';

import { Test } from '@nestjs/testing';

import { SkillsService } from './skills.service';

describe('skillsService', () => {
  let service: SkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkillsService],
    }).compile();

    service = module.get<SkillsService>(SkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
