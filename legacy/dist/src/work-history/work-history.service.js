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
exports.WorkHistoryService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const work_history_entity_1 = require("./entities/work-history.entity");
let WorkHistoryService = class WorkHistoryService {
    constructor(workHistoryRepository) {
        this.workHistoryRepository = workHistoryRepository;
    }
    create(createWorkHistoryDto) {
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
    findOne(id) {
        return `This action returns a #${id} workHistory`;
    }
    update(id, updateWorkHistoryDto) {
        return `This action updates a #${id} workHistory`;
    }
    remove(id) {
        return `This action removes a #${id} workHistory`;
    }
};
exports.WorkHistoryService = WorkHistoryService;
exports.WorkHistoryService = WorkHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(work_history_entity_1.WorkHistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], WorkHistoryService);
//# sourceMappingURL=work-history.service.js.map