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
exports.AssessmentController = void 0;
const common_1 = require("@nestjs/common");
const assessment_service_1 = require("./assessment.service");
const create_assessment_dto_1 = require("./dto/create-assessment.dto");
const passport_1 = require("@nestjs/passport");
const get_user_decorater_1 = require("../auth/get-user.decorater");
const user_entity_1 = require("../auth/user.entity");
const department_service_1 = require("../department/department.service");
const internships_service_1 = require("../internship/internships.service");
let AssessmentController = class AssessmentController {
    constructor(assessmentService, internshipService, departmentService) {
        this.assessmentService = assessmentService;
        this.internshipService = internshipService;
        this.departmentService = departmentService;
    }
    async createAssessment(internshipId, createAssessmentDto, user) {
        const internship = await this.internshipService.getIntershipById(internshipId);
        const department = await this.departmentService.getDepartmentByUser(user);
        return this.assessmentService.createAssessment(createAssessmentDto, internship, department);
    }
    async getAssessments(internshipId) {
        const internship = await this.internshipService.getIntershipById(internshipId);
        const assessments = await this.assessmentService.getAssessmentsByInternship(internship);
        console.log(assessments);
        return assessments;
    }
};
exports.AssessmentController = AssessmentController;
__decorate([
    (0, common_1.Post)('/:internshipId'),
    __param(0, (0, common_1.Param)('internshipId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorater_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_assessment_dto_1.CreateAssessmentDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AssessmentController.prototype, "createAssessment", null);
__decorate([
    (0, common_1.Get)('/:internshipId'),
    __param(0, (0, common_1.Param)('internshipId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssessmentController.prototype, "getAssessments", null);
exports.AssessmentController = AssessmentController = __decorate([
    (0, common_1.Controller)('assessment'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [assessment_service_1.AssessmentService,
        internships_service_1.InternshipsService,
        department_service_1.DepartmentService])
], AssessmentController);
//# sourceMappingURL=assessment.controller.js.map