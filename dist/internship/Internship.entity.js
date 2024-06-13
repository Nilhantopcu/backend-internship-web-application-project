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
exports.Internship = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../auth/user.entity");
const internship_status_enum_1 = require("./internship-status.enum");
const company_entity_1 = require("../company/company.entity");
const file_entity_1 = require("../files/file.entity");
const report_entity_1 = require("../reports/report.entity");
const assessment_entity_1 = require("../assessment/assessment.entity");
const insurance_entity_1 = require("../insurance/insurance.entity");
let Internship = class Internship extends typeorm_1.BaseEntity {
};
exports.Internship = Internship;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Internship.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Internship.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Internship.prototype, "departmentName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Internship.prototype, "internshipNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Internship.prototype, "sameDepartmentGraduate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Internship.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Internship.prototype, "finishDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Internship.prototype, "correspondingPerson", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Internship.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Internship.prototype, "internshipDays", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => user_entity_1.User, (user) => user.internships, {
        eager: false,
    }),
    __metadata("design:type", user_entity_1.User)
], Internship.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => company_entity_1.Company, (company) => company.internships, {
        eager: true,
    }),
    __metadata("design:type", company_entity_1.Company)
], Internship.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.FileEntity, (file) => file.internship, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", file_entity_1.FileEntity)
], Internship.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => report_entity_1.Reports, (reports) => reports.internship, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", report_entity_1.Reports)
], Internship.prototype, "reports", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assessment_entity_1.Assessment, (assessment) => assessment.internship, {
        eager: false,
    }),
    __metadata("design:type", Array)
], Internship.prototype, "assessments", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => insurance_entity_1.Insurance, (insurace) => insurace.internship, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", insurance_entity_1.Insurance)
], Internship.prototype, "insurance", void 0);
exports.Internship = Internship = __decorate([
    (0, typeorm_1.Entity)()
], Internship);
//# sourceMappingURL=Internship.entity.js.map