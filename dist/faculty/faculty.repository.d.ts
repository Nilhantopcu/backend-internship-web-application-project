import { DataSource, Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { Faculty } from './faculty.entity';
export declare class FacultyRepository extends Repository<Faculty> {
    private dataSource;
    constructor(dataSource: DataSource);
    createFaculty(createFacultyDto: CreateFacultyDto): Promise<Faculty>;
}
