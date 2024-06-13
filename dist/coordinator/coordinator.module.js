"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinatorModule = void 0;
const common_1 = require("@nestjs/common");
const coordinator_service_1 = require("./coordinator.service");
const coordinator_controller_1 = require("./coordinator.controller");
const typeorm_1 = require("@nestjs/typeorm");
const coordinator_entity_1 = require("./coordinator.entity");
const coordinator_repository_1 = require("./coordinator.repository");
let CoordinatorModule = class CoordinatorModule {
};
exports.CoordinatorModule = CoordinatorModule;
exports.CoordinatorModule = CoordinatorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([coordinator_entity_1.Coordinator])],
        providers: [coordinator_service_1.CoordinatorService, coordinator_repository_1.CoordinatorRepository],
        controllers: [coordinator_controller_1.CoordinatorController],
        exports: [coordinator_service_1.CoordinatorService],
    })
], CoordinatorModule);
//# sourceMappingURL=coordinator.module.js.map