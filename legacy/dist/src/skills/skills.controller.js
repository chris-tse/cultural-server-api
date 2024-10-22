"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsController = void 0;
const common_1 = require("@nestjs/common");
const skills_service_1 = require("./skills.service");
const swagger_1 = require("@nestjs/swagger");
const SkillCategory = ['frontend', 'backend', 'language', 'database'];
let SkillsController = class SkillsController {
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    findAll(filter) {
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
                throw new common_1.HttpException(`Invalid filter key. Available filter keys: ['frontend', 'backend', 'language', 'database']`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.SkillsController = SkillsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        name: 'filter',
        description: 'Skill category to filter by',
        example: 'frontend',
        required: false,
    }),
    __param(0, (0, common_1.Query)('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "findAll", null);
exports.SkillsController = SkillsController = __decorate([
    (0, swagger_1.ApiTags)('skills'),
    (0, common_1.Controller)('skills'),
    __metadata("design:paramtypes", [skills_service_1.SkillsService])
], SkillsController);
//# sourceMappingURL=skills.controller.js.map