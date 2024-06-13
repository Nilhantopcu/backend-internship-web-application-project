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
exports.CompanyEvaluationService = void 0;
const common_1 = require("@nestjs/common");
const company_evaluation_repository_1 = require("./company-evaluation.repository");
const company_repository_1 = require("../company/company.repository");
let CompanyEvaluationService = class CompanyEvaluationService {
    constructor(companyEvaluationRepository, companyRepository) {
        this.companyEvaluationRepository = companyEvaluationRepository;
        this.companyRepository = companyRepository;
    }
    async createCompanyEvaluation(createCompanyEvaluationDto) {
        const { score, notes, companyId } = createCompanyEvaluationDto;
        const company = await this.companyRepository.findOne({
            where: { id: companyId },
        });
        if (!company) {
            throw new common_1.NotFoundException(`Company with ID "${companyId}" not found`);
        }
        const companyEvaluation = this.companyEvaluationRepository.create({
            score,
            notes,
            company,
        });
        console.log('Saving company evaluation:', companyEvaluation);
        await this.companyEvaluationRepository.save(companyEvaluation);
        company.companyEvaluation = companyEvaluation;
        console.log('Updating company with evaluation:', company);
        await this.companyRepository.save(company);
        return companyEvaluation;
    }
    async updateCompanyEvaluation(id, updateCompanyEvaluationDto) {
        console.log('Updating company evaluation with ID:', id, 'Data:', updateCompanyEvaluationDto);
        const companyEvaluation = await this.companyEvaluationRepository.findOne({
            where: { id },
        });
        if (!companyEvaluation) {
            throw new common_1.NotFoundException(`Company Evaluation with ID "${id}" not found`);
        }
        const { score, notes } = updateCompanyEvaluationDto;
        if (score !== undefined)
            companyEvaluation.score = score;
        if (notes !== undefined)
            companyEvaluation.notes = notes;
        console.log('Saving updated company evaluation:', companyEvaluation);
        return this.companyEvaluationRepository.save(companyEvaluation);
    }
};
exports.CompanyEvaluationService = CompanyEvaluationService;
exports.CompanyEvaluationService = CompanyEvaluationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [company_evaluation_repository_1.CompanyEvaluationRepository,
        company_repository_1.CompanyRepository])
], CompanyEvaluationService);
//# sourceMappingURL=company-evaluation.service.js.map