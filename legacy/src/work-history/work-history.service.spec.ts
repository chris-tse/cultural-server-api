import type { TestingModule } from '@nestjs/testing';

import { Test } from '@nestjs/testing';

import { WorkHistoryService } from './work-history.service';

describe('workHistoryService', () => {
  let service: WorkHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkHistoryService],
    }).compile();

    service = module.get<WorkHistoryService>(WorkHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
