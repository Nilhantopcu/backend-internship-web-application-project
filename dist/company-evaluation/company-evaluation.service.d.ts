import { CompanyEvaluationRepository } from './company-evaluation.repository';
import { CreateCompanyEvaluationDto } from './dto/create-company-evaluation.dto';
import { UpdateCompanyEvaluationDto } from './dto/update-company-evaluation.dto';
import { CompanyRepository } from 'src/company/company.repository';
import { CompanyEvaluation } from './company-evaluation.entity';
export declare class CompanyEvaluationService {
    private readonly companyEvaluationRepository;
    private readonly companyRepository;
    constructor(companyEvaluationRepository: CompanyEvaluationRepository, companyRepository: CompanyRepository);
    createCompanyEvaluation(createCompanyEvaluationDto: CreateCompanyEvaluationDto): Promise<CompanyEvaluation>;
    updateCompanyEvaluation(id: string, updateCompanyEvaluationDto: UpdateCompanyEvaluationDto): Promise<CompanyEvaluation>;
}
