import { DataSource, Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department } from './department.entity';
export declare class DepartmentRepository extends Repository<Department> {
    private dataSource;
    constructor(dataSource: DataSource);
    createDeparment(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
}
