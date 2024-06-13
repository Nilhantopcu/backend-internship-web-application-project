import { DataSource, Repository } from 'typeorm';
import { Assessment } from './assessment.entity';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { Internship } from 'src/internship/Internship.entity';
import { Department } from 'src/department/department.entity';
export declare class AssessmentRepository extends Repository<Assessment> {
    private datasource;
    constructor(datasource: DataSource);
    createAssessment(createAssessmentDto: CreateAssessmentDto, internship: Internship, department: Department): Promise<Assessment>;
    getAssessmentsByInternship(internship: Internship): Promise<Assessment[]>;
}
