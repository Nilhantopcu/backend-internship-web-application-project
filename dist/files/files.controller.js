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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const files_service_1 = require("./files.service");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const path_1 = require("path");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    uploadFiles(files, internshipId) {
        const fileMap = {
            Internship_Application_Form: files.find((file) => file.fieldname === 'Internship_Application_Form'),
            Employer_Information_Form: files.find((file) => file.fieldname === 'Employer_Information_Form'),
            Declaration_Commitment_Document: files.find((file) => file.fieldname === 'Declaration_Commitment_Document'),
            ID_Card_Photocopy: files.find((file) => file.fieldname === 'ID_Card_Photocopy'),
        };
        return this.filesService.uploadFiles(fileMap, internshipId);
    }
    async getUploadedFiles(internshipId) {
        return this.filesService.getUploadedFiles(internshipId);
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Post)(':internshipId/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
                callback(null, uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('internshipId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.Get)(':internshipId/uploaded'),
    __param(0, (0, common_1.Param)('internshipId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getUploadedFiles", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
//# sourceMappingURL=files.controller.js.map