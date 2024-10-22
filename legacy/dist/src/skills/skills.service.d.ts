import { Skill } from './entities/skill.entity';
import { Repository } from 'typeorm';
export declare class SkillsService {
    private skillRepository;
    constructor(skillRepository: Repository<Skill>);
    findAll(): Promise<Skill[]>;
    findAllFrontend(): Promise<Skill[]>;
    findAllBackend(): Promise<Skill[]>;
    findAllLanguages(): Promise<Skill[]>;
    findAllDatabases(): Promise<Skill[]>;
}
