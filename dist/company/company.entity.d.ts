import { CompanyEvaluation } from 'src/company-evaluation/company-evaluation.entity';
import { Internship } from 'src/internship/Internship.entity';
import { BaseEntity } from 'typeorm';
export declare class Company extends BaseEntity {
    id: string;
    companyName: string;
    productionArea: string;
    companyPhoneNumber: string;
    companyEmailAddress: string;
    companyAddress: string;
    internships: Internship[];
    companyEvaluation: CompanyEvaluation;
}
