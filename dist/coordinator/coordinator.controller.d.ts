import { CoordinatorService } from './coordinator.service';
import { CreateCoordinatorDto } from './dto/create-coordinator.dto';
import { Coordinator } from './coordinator.entity';
export declare class CoordinatorController {
    private coordinatorService;
    constructor(coordinatorService: CoordinatorService);
    createDepartment(createCoordinatorDto: CreateCoordinatorDto): Promise<Coordinator>;
}
