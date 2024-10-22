import { SkillsService } from './skills.service';
declare const SkillCategory: readonly ["frontend", "backend", "language", "database"];
type SkillCategory = (typeof SkillCategory)[number];
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    findAll(filter?: SkillCategory): Promise<import("./entities/skill.entity").Skill[]>;
}
export {};
