import { CoordinatorRepository } from './coordinator.repository';
import { CreateCoordinatorDto } from './dto/create-coordinator.dto';
import { Coordinator } from './coordinator.entity';
export declare class CoordinatorService {
    private readonly coordinatorRepository;
    constructor(coordinatorRepository: CoordinatorRepository);
    createCoordinaor(createCoordinatorDto: CreateCoordinatorDto): Promise<Coordinator>;
}
