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
exports.AssessmentRepository = void 0;
const typeorm_1 = require("typeorm");
const assessment_entity_1 = require("./assessment.entity");
const common_1 = require("@nestjs/common");
let AssessmentRepository = class AssessmentRepository extends typeorm_1.Repository {
    constructor(datasource) {
        super(assessment_entity_1.Assessment, datasource.createEntityManager());
        this.datasource = datasource;
    }
    async createAssessment(createAssessmentDto, internship, department) {
        const assessment = this.create({
            ...createAssessmentDto,
            internship,
            department,
        });
        await this.save(assessment);
        return assessment;
    }
    async getAssessmentsByInternship(internship) {
        const assessments = await this.find({ where: { internship } });
        console.log(assessments);
        return assessments;
    }
};
exports.AssessmentRepository = AssessmentRepository;
exports.AssessmentRepository = AssessmentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AssessmentRepository);
//# sourceMappingURL=assessment.repository.js.map