import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
}
