import { CreateInternshipDto } from './dto/create-internship.dto';
import { GetInternshipFilterDto } from './dto/get-internships-fiter.dto';
import { InternshipRepository } from './internships.repository';
import { Internship } from './Internship.entity';
import { InternshipStatus } from './internship-status.enum';
import { User } from 'src/auth/user.entity';
import { CompanyService } from 'src/company/company.service';
import { UserRepository } from 'src/auth/users.repository';
import { StudentRepository } from 'src/student/student.repository';
import { CompanyEvaluationRepository } from 'src/company-evaluation/company-evaluation.repository';
export declare class InternshipsService {
    private readonly internshipsRepository;
    private companyService;
    private readonly userRepository;
    private readonly studentRepository;
    private readonly companyEvaluationRepository;
    constructor(internshipsRepository: InternshipRepository, companyService: CompanyService, userRepository: UserRepository, studentRepository: StudentRepository, companyEvaluationRepository: CompanyEvaluationRepository);
    private readonly logger;
    checkAndCompleteInternships(): Promise<void>;
    getInternshipswithfilter(filterDto: GetInternshipFilterDto, user: User): Promise<Internship[]>;
    getIntershipById(id: string): Promise<Internship>;
    getAllInternshipsByUser(user: User): Promise<Internship[]>;
    findAllWithStudentNames(): Promise<any[]>;
    getAllInternshipsWithCompanyEvaluations(): Promise<any[]>;
    createInternship(createInternshipDto: CreateInternshipDto, user: User): Promise<Internship>;
    deleteInternship(id: string, user: User): Promise<void>;
    updateInternshipStatus(id: string, status: InternshipStatus, user: User): Promise<Internship>;
    handleCron(): Promise<void>;
    sendEmailForUser(email: string, internshipId: string): Promise<void>;
    sendAssessmentFormEmail(email: string, internshipId: string): Promise<{
        message: string;
    }>;
}
