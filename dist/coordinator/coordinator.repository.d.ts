import { DataSource, Repository } from 'typeorm';
import { Coordinator } from './coordinator.entity';
import { CreateCoordinatorDto } from './dto/create-coordinator.dto';
export declare class CoordinatorRepository extends Repository<Coordinator> {
    private dataSource;
    constructor(dataSource: DataSource);
    createCoordinator(createCoordinatorDto: CreateCoordinatorDto): Promise<Coordinator>;
}
