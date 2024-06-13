import { Internship } from 'src/internship/Internship.entity';
import { UserRole } from './user-role.enum';
import { Student } from 'src/student/student.entity';
import { Department } from 'src/department/department.entity';
import { Faculty } from 'src/faculty/faculty.entity';
import { Coordinator } from 'src/coordinator/coordinator.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    role: UserRole;
    student: Student;
    deparment: Department;
    faculty: Faculty;
    coordinator: Coordinator;
    internships: Internship[];
}
