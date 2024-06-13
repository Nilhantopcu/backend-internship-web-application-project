import { DepartmentRepository } from './department.repository';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department } from './department.entity';
import { User } from 'src/auth/user.entity';
export declare class DepartmentService {
    private readonly departmentRepository;
    constructor(departmentRepository: DepartmentRepository);
    createDeparment(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    getDepartmentByUser(user: User): Promise<Department>;
}
