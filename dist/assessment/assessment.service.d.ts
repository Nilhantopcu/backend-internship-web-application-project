import { AssessmentRepository } from './assessment.repository';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { Internship } from 'src/internship/Internship.entity';
import { Department } from 'src/department/department.entity';
import { Assessment } from './assessment.entity';
export declare class AssessmentService {
    private readonly assessmentRepository;
    constructor(assessmentRepository: AssessmentRepository);
    createAssessment(createAssessmentDto: CreateAssessmentDto, internship: Internship, department: Department): Promise<Assessment>;
    getAssessmentsByInternship(internship: Internship): Promise<Assessment[]>;
}
