/// <reference types="multer" />
import { ReportsService } from './reports.service';
import { Response, Request } from 'express';
import { UpdateReportStatusDto } from './dto/update-report-status.dto';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    uploadFiles(reports: Array<Express.Multer.File>, internshipId: string): Promise<import("./report.entity").Reports>;
    getReportsByInternship(internshipId: string): Promise<import("./report.entity").Reports[]>;
    downloadFile(filename: string, res: Response): Promise<any>;
    updateReportStatus(reportId: string, updateReportStatusDto: UpdateReportStatusDto, req: Request): Promise<{
        message: string;
        reportId: string;
        status: import("./report-status.enum").ReportStatus;
    }>;
}
