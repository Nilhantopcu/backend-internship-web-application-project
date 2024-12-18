"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const users_repository_1 = require("./users.repository");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
const student_module_1 = require("../student/student.module");
const department_module_1 = require("../department/department.module");
const faculty_module_1 = require("../faculty/faculty.module");
const coordinator_module_1 = require("../coordinator/coordinator.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'topSecret51',
                signOptions: {
                    expiresIn: 3600,
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            student_module_1.StudentModule,
            department_module_1.DepartmentModule,
            faculty_module_1.FacultyModule,
            coordinator_module_1.CoordinatorModule,
        ],
        providers: [auth_service_1.AuthService, users_repository_1.UserRepository, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule, auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map