import { AssessmentService } from './assessment.service';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { User } from 'src/auth/user.entity';
import { DepartmentService } from 'src/department/department.service';
import { InternshipsService } from 'src/internship/internships.service';
export declare class AssessmentController {
    private assessmentService;
    private internshipService;
    private departmentService;
    constructor(assessmentService: AssessmentService, internshipService: InternshipsService, departmentService: DepartmentService);
    createAssessment(internshipId: string, createAssessmentDto: CreateAssessmentDto, user: User): Promise<import("./assessment.entity").Assessment>;
    getAssessments(internshipId: string): Promise<import("./assessment.entity").Assessment[]>;
}
