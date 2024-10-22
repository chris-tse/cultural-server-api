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
exports.WorkHistoryController = void 0;
const common_1 = require("@nestjs/common");
const work_history_service_1 = require("./work-history.service");
const swagger_1 = require("@nestjs/swagger");
let WorkHistoryController = class WorkHistoryController {
    constructor(workHistoryService) {
        this.workHistoryService = workHistoryService;
    }
    findAll(sort) {
        if (!sort) {
            return this.workHistoryService.findAll();
        }
        switch (sort) {
            case 'startDate':
                return this.workHistoryService.findAllSortedByStartDate();
            default:
                throw new common_1.HttpException('Invalid sort key. Try `?sort=startDate`', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.WorkHistoryController = WorkHistoryController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'sort', description: 'Key to sort by. Valid options: `startDate`', required: false }),
    __param(0, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkHistoryController.prototype, "findAll", null);
exports.WorkHistoryController = WorkHistoryController = __decorate([
    (0, swagger_1.ApiTags)('work history'),
    (0, common_1.Controller)('work-history'),
    __metadata("design:paramtypes", [work_history_service_1.WorkHistoryService])
], WorkHistoryController);
//# sourceMappingURL=work-history.controller.js.map