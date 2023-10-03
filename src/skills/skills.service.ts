import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Skill } from '../entities/skills.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
  ) {}

  async findAll(): Promise<Skill[]> {
    const skills = await this.skillRepository.find()
    console.log('skills', skills)
    return skills
  }

  // async findOne(id: number): Promise<Skill> {
  //   return this.skillRepository.findOneBy({ id })
  // }
  //
  // async create(user: Skill): Promise<Skill> {
  //   return this.skillRepository.save(user)
  // }
  //
  // async update(id: number, user: Skill): Promise<Skill> {
  //   await this.skillRepository.update(id, user)
  //   return this.skillRepository.findOneBy({ id })
  // }
  //
  // async remove(id: number): Promise<void> {
  //   await this.skillRepository.delete(id)
  // }
}
