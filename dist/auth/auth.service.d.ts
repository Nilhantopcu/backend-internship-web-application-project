import { UserRepository } from './users.repository';
import { AuthCreadentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { StudentService } from 'src/student/student.service';
import { DepartmentService } from 'src/department/department.service';
import { AuthSigninDto } from './dto/auth-signin.dto';
import { FacultyService } from 'src/faculty/faculty.service';
import { CoordinatorService } from 'src/coordinator/coordinator.service';
export declare class AuthService {
    private readonly usersRepository;
    private jwtService;
    private studentService;
    private departmentService;
    private facultyService;
    private coordinatorService;
    constructor(usersRepository: UserRepository, jwtService: JwtService, studentService: StudentService, departmentService: DepartmentService, facultyService: FacultyService, coordinatorService: CoordinatorService);
    signUp(authCredentialsDto: AuthCreadentialsDto): Promise<User>;
    signIn(authSigninDto: AuthSigninDto): Promise<{
        accessToken: string;
    }>;
    getUserByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}
