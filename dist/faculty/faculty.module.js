"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyModule = void 0;
const common_1 = require("@nestjs/common");
const faculty_service_1 = require("./faculty.service");
const faculty_controller_1 = require("./faculty.controller");
const typeorm_1 = require("@nestjs/typeorm");
const faculty_entity_1 = require("./faculty.entity");
const faculty_repository_1 = require("./faculty.repository");
let FacultyModule = class FacultyModule {
};
exports.FacultyModule = FacultyModule;
exports.FacultyModule = FacultyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([faculty_entity_1.Faculty])],
        providers: [faculty_service_1.FacultyService, faculty_repository_1.FacultyRepository],
        controllers: [faculty_controller_1.FacultyController],
        exports: [faculty_service_1.FacultyService],
    })
], FacultyModule);
//# sourceMappingURL=faculty.module.js.map