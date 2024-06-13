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
exports.InsuranceController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const insurance_service_1 = require("./insurance.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let InsuranceController = class InsuranceController {
    constructor(insuranceService) {
        this.insuranceService = insuranceService;
    }
    uploadFiles(insurance, internshipId) {
        console.log('Upload files:', insurance);
        if (!insurance || insurance.length === 0) {
            throw new Error('No files uploaded');
        }
        const fileMap = {
            InsuranceForm: insurance.find((file) => file.fieldname === 'InsuranceForm'),
        };
        if (!fileMap.InsuranceForm) {
            throw new Error('Insurance form file not found');
        }
        return this.insuranceService.uploadInsurance(fileMap, internshipId);
    }
    getInsuranceByInternship(internshipId) {
        return this.insuranceService.getInsuranceByInternship(internshipId);
    }
    async downloadFile(filename, res) {
        res.sendFile(filename, { root: './uploads' });
    }
};
exports.InsuranceController = InsuranceController;
__decorate([
    (0, common_1.Post)(':internshipId/upload'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                callback(null, `${Date.now()}-${file.originalname}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('internshipId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", void 0)
], InsuranceController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.Get)(':internshipId'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('internshipId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InsuranceController.prototype, "getInsuranceByInternship", null);
__decorate([
    (0, common_1.Get)('download/:filename'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InsuranceController.prototype, "downloadFile", null);
exports.InsuranceController = InsuranceController = __decorate([
    (0, common_1.Controller)('insurance'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [insurance_service_1.InsuranceService])
], InsuranceController);
//# sourceMappingURL=insurance.controller.js.map