"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const internships_repository_1 = require("../internship/internships.repository");
const report_repository_1 = require("./report.repository");
const common_1 = require("@nestjs/common");
const user_role_enum_1 = require("../auth/user-role.enum");
let ReportsService = class ReportsService {
    constructor(reportRepository, internshipRepository) {
        this.reportRepository = reportRepository;
        this.internshipRepository = internshipRepository;
    }
    async uploadReports(reports, internshipId) {
        const internship = await this.internshipRepository.findOne({
            where: { id: internshipId },
            relations: ['user'],
        });
        if (!internship) {
            throw new common_1.NotFoundException(`Internship with ID ${internshipId} not found`);
        }
        const newFile = this.reportRepository.create({
            Internship_Report: reports.Internship_Report.filename,
            internship: internship,
        });
        await this.reportRepository.save(newFile);
        internship.reports = newFile;
        await this.internshipRepository.save(internship);
        return newFile;
    }
    async getReportsByInternship(internshipId) {
        return this.reportRepository.find({
            where: { internship: { id: internshipId } },
            relations: ['internship'],
        });
    }
    async updateReportStatus(reportId, status, user) {
        const report = await this.reportRepository.findOne({
            where: { id: reportId },
            relations: ['internship', 'internship.user'],
        });
        if (!report) {
            throw new common_1.NotFoundException(`Report with ID ${reportId} not found`);
        }
        if (user.role !== user_role_enum_1.UserRole.DEPARTMENT) {
            throw new common_1.ForbiddenException('You do not have permission to perform this action');
        }
        report.Evaluation = status;
        await this.reportRepository.save(report);
        return report;
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [report_repository_1.ReportRepository,
        internships_repository_1.InternshipRepository])
], ReportsService);
//# sourceMappingURL=reports.service.js.map