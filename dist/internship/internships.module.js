"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternshipsModule = void 0;
const common_1 = require("@nestjs/common");
const internship_controller_1 = require("./internship.controller");
const internships_service_1 = require("./internships.service");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const company_module_1 = require("../company/company.module");
const Internship_entity_1 = require("./Internship.entity");
const internships_repository_1 = require("./internships.repository");
const user_entity_1 = require("../auth/user.entity");
const student_entity_1 = require("../student/student.entity");
const users_repository_1 = require("../auth/users.repository");
const student_repository_1 = require("../student/student.repository");
const files_module_1 = require("../files/files.module");
const file_repository_1 = require("../files/file.repository");
const reports_module_1 = require("../reports/reports.module");
const report_repository_1 = require("../reports/report.repository");
const company_evaluation_repository_1 = require("../company-evaluation/company-evaluation.repository");
const passport_1 = require("@nestjs/passport");
const insurance_module_1 = require("../insurance/insurance.module");
const insurance_repository_1 = require("../insurance/insurance.repository");
let InternshipsModule = class InternshipsModule {
};
exports.InternshipsModule = InternshipsModule;
exports.InternshipsModule = InternshipsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Internship_entity_1.Internship, user_entity_1.User, student_entity_1.Student]),
            auth_module_1.AuthModule,
            company_module_1.CompanyModule,
            files_module_1.FilesModule,
            reports_module_1.ReportsModule,
            insurance_module_1.InsuranceModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
        ],
        controllers: [internship_controller_1.InternshipController],
        providers: [
            internships_service_1.InternshipsService,
            internships_repository_1.InternshipRepository,
            users_repository_1.UserRepository,
            student_repository_1.StudentRepository,
            file_repository_1.FileRepository,
            report_repository_1.ReportRepository,
            insurance_repository_1.InsuranceRepository,
            company_evaluation_repository_1.CompanyEvaluationRepository,
        ],
        exports: [internships_service_1.InternshipsService],
    })
], InternshipsModule);
//# sourceMappingURL=internships.module.js.map