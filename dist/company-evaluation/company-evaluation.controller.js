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
exports.CompanyEvaluationController = void 0;
const common_1 = require("@nestjs/common");
const company_evaluation_service_1 = require("./company-evaluation.service");
const create_company_evaluation_dto_1 = require("./dto/create-company-evaluation.dto");
const update_company_evaluation_dto_1 = require("./dto/update-company-evaluation.dto");
let CompanyEvaluationController = class CompanyEvaluationController {
    constructor(companyEvaluationService) {
        this.companyEvaluationService = companyEvaluationService;
    }
    createCompanyEvaluation(createCompanyEvaluationDto) {
        console.log('Received request to create company evaluation:', createCompanyEvaluationDto);
        return this.companyEvaluationService.createCompanyEvaluation(createCompanyEvaluationDto);
    }
    updateCompanyEvaluation(id, updateCompanyEvaluationDto) {
        console.log('Received request to update company evaluation with ID:', id, 'Data:', updateCompanyEvaluationDto);
        return this.companyEvaluationService.updateCompanyEvaluation(id, updateCompanyEvaluationDto);
    }
};
exports.CompanyEvaluationController = CompanyEvaluationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_evaluation_dto_1.CreateCompanyEvaluationDto]),
    __metadata("design:returntype", void 0)
], CompanyEvaluationController.prototype, "createCompanyEvaluation", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_company_evaluation_dto_1.UpdateCompanyEvaluationDto]),
    __metadata("design:returntype", void 0)
], CompanyEvaluationController.prototype, "updateCompanyEvaluation", null);
exports.CompanyEvaluationController = CompanyEvaluationController = __decorate([
    (0, common_1.Controller)('company-evaluation'),
    __metadata("design:paramtypes", [company_evaluation_service_1.CompanyEvaluationService])
], CompanyEvaluationController);
//# sourceMappingURL=company-evaluation.controller.js.map