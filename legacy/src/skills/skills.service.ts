import type { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
  ) {}

  async findAll() {
    return await this.skillRepository.find();
  }

  async findAllFrontend() {
    return await this.skillRepository.find({ where: { category: 'Frontend' } });
  }

  async findAllBackend() {
    return await this.skillRepository.find({ where: { category: 'Backend' } });
  }

  async findAllLanguages() {
    return await this.skillRepository.find({ where: { category: 'Language' } });
  }

  async findAllDatabases() {
    return await this.skillRepository.find({ where: { category: 'Database' } });
  }
}
