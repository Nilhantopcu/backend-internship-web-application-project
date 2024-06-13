"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const internships_module_1 = require("./internship/internships.module");
const company_module_1 = require("./company/company.module");
const user_entity_1 = require("./auth/user.entity");
const Internship_entity_1 = require("./internship/Internship.entity");
const company_entity_1 = require("./company/company.entity");
const student_module_1 = require("./student/student.module");
const department_module_1 = require("./department/department.module");
const faculty_module_1 = require("./faculty/faculty.module");
const coordinator_module_1 = require("./coordinator/coordinator.module");
const files_module_1 = require("./files/files.module");
const platform_express_1 = require("@nestjs/platform-express");
const reports_module_1 = require("./reports/reports.module");
const company_evaluation_module_1 = require("./company-evaluation/company-evaluation.module");
const assessment_module_1 = require("./assessment/assessment.module");
const schedule_1 = require("@nestjs/schedule");
const insurance_module_1 = require("./insurance/insurance.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'Nilhan1!.',
                database: 'internship-web-application',
                autoLoadEntities: true,
                entities: [user_entity_1.User, Internship_entity_1.Internship, company_entity_1.Company],
                synchronize: true,
            }),
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
            auth_module_1.AuthModule,
            internships_module_1.InternshipsModule,
            company_module_1.CompanyModule,
            student_module_1.StudentModule,
            department_module_1.DepartmentModule,
            faculty_module_1.FacultyModule,
            coordinator_module_1.CoordinatorModule,
            files_module_1.FilesModule,
            reports_module_1.ReportsModule,
            company_evaluation_module_1.CompanyEvaluationModule,
            assessment_module_1.AssessmentModule,
            schedule_1.ScheduleModule.forRoot(),
            insurance_module_1.InsuranceModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map