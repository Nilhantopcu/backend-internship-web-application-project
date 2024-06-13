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
exports.CompanyEvaluation = void 0;
const company_entity_1 = require("../company/company.entity");
const typeorm_1 = require("typeorm");
let CompanyEvaluation = class CompanyEvaluation {
};
exports.CompanyEvaluation = CompanyEvaluation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], CompanyEvaluation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], CompanyEvaluation.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyEvaluation.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => company_entity_1.Company, (company) => company.companyEvaluation),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", company_entity_1.Company)
], CompanyEvaluation.prototype, "company", void 0);
exports.CompanyEvaluation = CompanyEvaluation = __decorate([
    (0, typeorm_1.Entity)()
], CompanyEvaluation);
//# sourceMappingURL=company-evaluation.entity.js.map