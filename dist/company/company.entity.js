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
exports.Company = void 0;
const company_evaluation_entity_1 = require("../company-evaluation/company-evaluation.entity");
const Internship_entity_1 = require("../internship/Internship.entity");
const typeorm_1 = require("typeorm");
let Company = class Company extends typeorm_1.BaseEntity {
};
exports.Company = Company;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "productionArea", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "companyPhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "companyEmailAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "companyAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => Internship_entity_1.Internship, (internship) => internship.company, {
        eager: false,
    }),
    __metadata("design:type", Array)
], Company.prototype, "internships", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => company_evaluation_entity_1.CompanyEvaluation, (companyEvaluation) => companyEvaluation.company, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", company_evaluation_entity_1.CompanyEvaluation)
], Company.prototype, "companyEvaluation", void 0);
exports.Company = Company = __decorate([
    (0, typeorm_1.Entity)()
], Company);
//# sourceMappingURL=company.entity.js.map