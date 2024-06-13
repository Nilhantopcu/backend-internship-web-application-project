"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyEvaluationModule = void 0;
const common_1 = require("@nestjs/common");
const company_evaluation_controller_1 = require("./company-evaluation.controller");
const company_evaluation_service_1 = require("./company-evaluation.service");
const typeorm_1 = require("@nestjs/typeorm");
const company_evaluation_entity_1 = require("./company-evaluation.entity");
const company_evaluation_repository_1 = require("./company-evaluation.repository");
const company_entity_1 = require("../company/company.entity");
const company_repository_1 = require("../company/company.repository");
let CompanyEvaluationModule = class CompanyEvaluationModule {
};
exports.CompanyEvaluationModule = CompanyEvaluationModule;
exports.CompanyEvaluationModule = CompanyEvaluationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([company_evaluation_entity_1.CompanyEvaluation, company_entity_1.Company])],
        controllers: [company_evaluation_controller_1.CompanyEvaluationController],
        providers: [
            company_evaluation_service_1.CompanyEvaluationService,
            company_evaluation_repository_1.CompanyEvaluationRepository,
            company_repository_1.CompanyRepository,
        ],
        exports: [company_evaluation_service_1.CompanyEvaluationService],
    })
], CompanyEvaluationModule);
//# sourceMappingURL=company-evaluation.module.js.map