"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const skills_module_1 = require("./skills/skills.module");
const skills_controller_1 = require("./skills/skills.controller");
const skills_service_1 = require("./skills/skills.service");
const work_history_module_1 = require("./work-history/work-history.module");
const work_history_controller_1 = require("./work-history/work-history.controller");
const work_history_service_1 = require("./work-history/work-history.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                ignoreEnvFile: process.env.NODE_ENV === 'production',
                isGlobal: true,
            }),
            database_module_1.DatabaseModule,
            skills_module_1.SkillsModule,
            work_history_module_1.WorkHistoryModule,
        ],
        controllers: [skills_controller_1.SkillsController, work_history_controller_1.WorkHistoryController],
        providers: [skills_service_1.SkillsService, work_history_service_1.WorkHistoryService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map