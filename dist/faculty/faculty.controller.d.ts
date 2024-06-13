import { FacultyService } from './faculty.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { Faculty } from './faculty.entity';
export declare class FacultyController {
    private facultyService;
    constructor(facultyService: FacultyService);
    createDepartment(createFacultyDto: CreateFacultyDto): Promise<Faculty>;
}
