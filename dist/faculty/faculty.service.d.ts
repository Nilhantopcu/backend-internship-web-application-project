import { CreateFacultyDto } from './dto/create-faculty.dto';
import { Faculty } from './faculty.entity';
import { FacultyRepository } from './faculty.repository';
export declare class FacultyService {
    private readonly facultyRepository;
    constructor(facultyRepository: FacultyRepository);
    createFaculty(createFacultyDto: CreateFacultyDto): Promise<Faculty>;
}
