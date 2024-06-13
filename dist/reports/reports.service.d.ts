/// <reference types="multer" />
import { InternshipRepository } from 'src/internship/internships.repository';
import { ReportRepository } from './report.repository';
import { Reports } from './report.entity';
import { ReportStatus } from './report-status.enum';
import { User } from 'src/auth/user.entity';
export declare class ReportsService {
    private readonly reportRepository;
    private readonly internshipRepository;
    constructor(reportRepository: ReportRepository, internshipRepository: InternshipRepository);
    uploadReports(reports: {
        Internship_Report: Express.Multer.File;
    }, internshipId: string): Promise<Reports>;
    getReportsByInternship(internshipId: string): Promise<Reports[]>;
    updateReportStatus(reportId: string, status: ReportStatus, user: User): Promise<Reports>;
}
