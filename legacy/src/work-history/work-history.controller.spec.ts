import type { TestingModule } from '@nestjs/testing';

import { Test } from '@nestjs/testing';

import { WorkHistoryController } from './work-history.controller';
import { WorkHistoryService } from './work-history.service';

describe('workHistoryController', () => {
  let controller: WorkHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkHistoryController],
      providers: [WorkHistoryService],
    }).compile();

    controller = module.get<WorkHistoryController>(WorkHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
