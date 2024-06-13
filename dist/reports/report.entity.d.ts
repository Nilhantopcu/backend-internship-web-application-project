import { Internship } from 'src/internship/internship.entity';
import { BaseEntity } from 'typeorm';
import { ReportStatus } from './report-status.enum';
export declare class Reports extends BaseEntity {
    id: string;
    Internship_Report: string;
    Evaluation: ReportStatus;
    internship: Internship;
}
