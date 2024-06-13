import { StudentRepository } from './student.repository';
import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
}
