import { DataSource, Repository } from 'typeorm';
import { CompanyEvaluation } from './company-evaluation.entity';
export declare class CompanyEvaluationRepository extends Repository<CompanyEvaluation> {
    private dataSource;
    constructor(dataSource: DataSource);
}
