"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssessmentModule = void 0;
const common_1 = require("@nestjs/common");
const assessment_controller_1 = require("./assessment.controller");
const typeorm_1 = require("@nestjs/typeorm");
const assessment_entity_1 = require("./assessment.entity");
const internships_module_1 = require("../internship/internships.module");
const department_module_1 = require("../department/department.module");
const assessment_service_1 = require("./assessment.service");
const assessment_repository_1 = require("./assessment.repository");
const passport_1 = require("@nestjs/passport");
let AssessmentModule = class AssessmentModule {
};
exports.AssessmentModule = AssessmentModule;
exports.AssessmentModule = AssessmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([assessment_entity_1.Assessment]),
            internships_module_1.InternshipsModule,
            department_module_1.DepartmentModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
        ],
        controllers: [assessment_controller_1.AssessmentController],
        providers: [assessment_service_1.AssessmentService, assessment_repository_1.AssessmentRepository],
    })
], AssessmentModule);
//# sourceMappingURL=assessment.module.js.map