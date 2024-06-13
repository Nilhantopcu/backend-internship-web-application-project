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
exports.InsuranceService = void 0;
const common_1 = require("@nestjs/common");
const insurance_repository_1 = require("./insurance.repository");
const internships_repository_1 = require("../internship/internships.repository");
const internship_status_enum_1 = require("../internship/internship-status.enum");
let InsuranceService = class InsuranceService {
    constructor(insuranceRepository, internshipRepository) {
        this.insuranceRepository = insuranceRepository;
        this.internshipRepository = internshipRepository;
    }
    async uploadInsurance(insurance, internshipId) {
        const internship = await this.internshipRepository.findOne({
            where: { id: internshipId },
            relations: ['user'],
        });
        if (!internship) {
            throw new common_1.NotFoundException(`Internship with ID ${internshipId} not found`);
        }
        const newFile = this.insuranceRepository.create({
            InsuranceForm: insurance.InsuranceForm.filename,
            internship: internship,
        });
        await this.insuranceRepository.save(newFile);
        internship.status = internship_status_enum_1.InternshipStatus.INSURANCE_UPLOADED;
        internship.insurance = newFile;
        await this.internshipRepository.save(internship);
        return newFile;
    }
    async getInsuranceByInternship(internshipId) {
        return this.insuranceRepository.find({
            where: { internship: { id: internshipId } },
            relations: ['internship'],
        });
    }
};
exports.InsuranceService = InsuranceService;
exports.InsuranceService = InsuranceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [insurance_repository_1.InsuranceRepository,
        internships_repository_1.InternshipRepository])
], InsuranceService);
//# sourceMappingURL=insurance.service.js.map