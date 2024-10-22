import { WorkHistoryService } from './work-history.service';
export declare class WorkHistoryController {
    private readonly workHistoryService;
    constructor(workHistoryService: WorkHistoryService);
    findAll(sort?: string): Promise<import("./entities/work-history.entity").WorkHistory[]>;
}
