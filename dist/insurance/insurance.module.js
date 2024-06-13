"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceModule = void 0;
const common_1 = require("@nestjs/common");
const insurance_controller_1 = require("./insurance.controller");
const insurance_service_1 = require("./insurance.service");
const typeorm_1 = require("@nestjs/typeorm");
const insurance_entity_1 = require("./insurance.entity");
const Internship_entity_1 = require("../internship/Internship.entity");
const insurance_repository_1 = require("./insurance.repository");
const internships_repository_1 = require("../internship/internships.repository");
let InsuranceModule = class InsuranceModule {
};
exports.InsuranceModule = InsuranceModule;
exports.InsuranceModule = InsuranceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([insurance_entity_1.Insurance, Internship_entity_1.Internship])],
        controllers: [insurance_controller_1.InsuranceController],
        providers: [insurance_service_1.InsuranceService, insurance_repository_1.InsuranceRepository, internships_repository_1.InternshipRepository],
        exports: [insurance_service_1.InsuranceService],
    })
], InsuranceModule);
//# sourceMappingURL=insurance.module.js.map