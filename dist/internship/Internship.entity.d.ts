import { BaseEntity } from 'typeorm';
import { User } from 'src/auth/user.entity';
import { InternshipStatus } from './internship-status.enum';
import { Company } from 'src/company/company.entity';
import { FileEntity } from 'src/files/file.entity';
import { Reports } from 'src/reports/report.entity';
import { Assessment } from 'src/assessment/assessment.entity';
import { Insurance } from 'src/insurance/insurance.entity';
export declare class Internship extends BaseEntity {
    id: string;
    companyName: string;
    departmentName: string;
    internshipNumber: string;
    sameDepartmentGraduate: string;
    startDate: string;
    finishDate: string;
    correspondingPerson: string;
    status: InternshipStatus;
    internshipDays: string;
    user: User;
    company: Company;
    file: FileEntity;
    reports: Reports;
    assessments: Assessment[];
    insurance: Insurance;
}
