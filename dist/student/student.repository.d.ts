import { DataSource, Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentRepository extends Repository<Student> {
    private dataSource;
    constructor(dataSource: DataSource);
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
}
