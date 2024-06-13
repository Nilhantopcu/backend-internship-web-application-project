import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department } from './department.entity';
export declare class DepartmentController {
    private deparmentService;
    constructor(deparmentService: DepartmentService);
    createDepartment(createDeparmentDto: CreateDepartmentDto): Promise<Department>;
}
