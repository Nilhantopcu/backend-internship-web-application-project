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
exports.CoordinatorService = void 0;
const common_1 = require("@nestjs/common");
const coordinator_repository_1 = require("./coordinator.repository");
let CoordinatorService = class CoordinatorService {
    constructor(coordinatorRepository) {
        this.coordinatorRepository = coordinatorRepository;
    }
    async createCoordinaor(createCoordinatorDto) {
        console.log(createCoordinatorDto);
        const { IDno } = createCoordinatorDto;
        let coordinator = await this.coordinatorRepository.findOne({
            where: { IDno },
        });
        if (!coordinator) {
            coordinator =
                await this.coordinatorRepository.createCoordinator(createCoordinatorDto);
        }
        else {
        }
        return coordinator;
    }
};
exports.CoordinatorService = CoordinatorService;
exports.CoordinatorService = CoordinatorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [coordinator_repository_1.CoordinatorRepository])
], CoordinatorService);
//# sourceMappingURL=coordinator.service.js.map