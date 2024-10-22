import type { TestingModule } from '@nestjs/testing';

import { Test } from '@nestjs/testing';

import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';

describe('skillsController', () => {
  let controller: SkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillsController],
      providers: [SkillsService],
    }).compile();

    controller = module.get<SkillsController>(SkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
