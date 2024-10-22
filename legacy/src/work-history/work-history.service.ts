import type { Repository } from 'typeorm';

import type { CreateWorkHistoryDto } from './dto/create-work-history.dto';
import type { UpdateWorkHistoryDto } from './dto/update-work-history.dto';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { WorkHistory } from './entities/work-history.entity';

@Injectable()
export class WorkHistoryService {
  constructor(
    @InjectRepository(WorkHistory)
    private workHistoryRepository: Repository<WorkHistory>,
  ) {}

  create(createWorkHistoryDto: CreateWorkHistoryDto) {
    return 'This action adds a new workHistory';
  }

  async findAll() {
    const workHistoryList = await this.workHistoryRepository.find();

    for (const history of workHistoryList) {
      if (!history.endDate) {
        history.endDate = 'Present';
      }
    }

    return workHistoryList;
  }

  async findAllSortedByStartDate() {
    return await this.workHistoryRepository.find({ order: { startDate: 'DESC' } });
  }

  findOne(id: number) {
    return `This action returns a #${id} workHistory`;
  }

  update(id: number, updateWorkHistoryDto: UpdateWorkHistoryDto) {
    return `This action updates a #${id} workHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} workHistory`;
  }
}
