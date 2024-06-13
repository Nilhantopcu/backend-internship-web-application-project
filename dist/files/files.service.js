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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const file_repository_1 = require("./file.repository");
const internships_repository_1 = require("../internship/internships.repository");
let FilesService = class FilesService {
    constructor(fileRepository, internshipRepository) {
        this.fileRepository = fileRepository;
        this.internshipRepository = internshipRepository;
    }
    async uploadFiles(files, internshipId) {
        const internship = await this.internshipRepository.findOneBy({
            id: internshipId,
        });
        if (!internship) {
            throw new common_1.NotFoundException(`Internship with ID ${internshipId} not found`);
        }
        const newFile = this.fileRepository.create({
            Internship_Application_Form: files.Internship_Application_Form.filename,
            Employer_Information_Form: files.Employer_Information_Form.filename,
            Declaration_Commitment_Document: files.Declaration_Commitment_Document.filename,
            ID_Card_Photocopy: files.ID_Card_Photocopy.filename,
            internship: internship,
        });
        await this.fileRepository.save(newFile);
        internship.file = newFile;
        await this.internshipRepository.save(internship);
        return newFile;
    }
    async getUploadedFiles(internshipId) {
        const internship = await this.internshipRepository.findOneBy({
            id: internshipId,
        });
        if (!internship) {
            throw new common_1.NotFoundException(`Internship with ID ${internshipId} not found`);
        }
        const files = await this.fileRepository.findOneBy({
            internship: internship,
        });
        if (!files) {
            throw new common_1.NotFoundException(`Files for internship with ID ${internshipId} not found`);
        }
        return files;
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_repository_1.FileRepository,
        internships_repository_1.InternshipRepository])
], FilesService);
//# sourceMappingURL=files.service.js.map