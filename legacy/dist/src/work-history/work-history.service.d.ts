import { Repository } from 'typeorm';
import { CreateWorkHistoryDto } from './dto/create-work-history.dto';
import { UpdateWorkHistoryDto } from './dto/update-work-history.dto';
import { WorkHistory } from './entities/work-history.entity';
export declare class WorkHistoryService {
    private workHistoryRepository;
    constructor(workHistoryRepository: Repository<WorkHistory>);
    create(createWorkHistoryDto: CreateWorkHistoryDto): string;
    findAll(): Promise<WorkHistory[]>;
    findAllSortedByStartDate(): Promise<WorkHistory[]>;
    findOne(id: number): string;
    update(id: number, updateWorkHistoryDto: UpdateWorkHistoryDto): string;
    remove(id: number): string;
}
