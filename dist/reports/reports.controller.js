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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const update_report_status_dto_1 = require("./dto/update-report-status.dto");
const passport_1 = require("@nestjs/passport");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    uploadFiles(reports, internshipId) {
        const fileMap = {
            Internship_Report: reports.find((file) => file.fieldname === 'Internship_Report'),
        };
        return this.reportsService.uploadReports(fileMap, internshipId);
    }
    getReportsByInternship(internshipId) {
        return this.reportsService.getReportsByInternship(internshipId);
    }
    async downloadFile(filename, res) {
        res.sendFile(filename, { root: './uploads' });
    }
    async updateReportStatus(reportId, updateReportStatusDto, req) {
        const user = req.user;
        const { status } = updateReportStatusDto;
        const updatedReport = await this.reportsService.updateReportStatus(reportId, status, user);
        return {
            message: 'Report status updated successfully',
            reportId: updatedReport.id,
            status: updatedReport.Evaluation,
        };
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Post)(':internshipId/upload'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                callback(null, file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('internshipId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.Get)(':internshipId'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('internshipId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "getReportsByInternship", null);
__decorate([
    (0, common_1.Get)('download/:filename'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "downloadFile", null);
__decorate([
    (0, common_1.Patch)(':reportId/status'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('reportId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_report_status_dto_1.UpdateReportStatusDto, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "updateReportStatus", null);
exports.ReportsController = ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
//# sourceMappingURL=reports.controller.js.map