import { CompanyEvaluationService } from './company-evaluation.service';
import { CreateCompanyEvaluationDto } from './dto/create-company-evaluation.dto';
import { UpdateCompanyEvaluationDto } from './dto/update-company-evaluation.dto';
export declare class CompanyEvaluationController {
    private readonly companyEvaluationService;
    constructor(companyEvaluationService: CompanyEvaluationService);
    createCompanyEvaluation(createCompanyEvaluationDto: CreateCompanyEvaluationDto): Promise<import("./company-evaluation.entity").CompanyEvaluation>;
    updateCompanyEvaluation(id: string, updateCompanyEvaluationDto: UpdateCompanyEvaluationDto): Promise<import("./company-evaluation.entity").CompanyEvaluation>;
}
