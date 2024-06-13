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
var InternshipController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternshipController = void 0;
const common_1 = require("@nestjs/common");
const create_internship_dto_1 = require("./dto/create-internship.dto");
const passport_1 = require("@nestjs/passport");
const update_internship_status_dto_1 = require("./dto/update-internship-status.dto");
const internships_service_1 = require("./internships.service");
const get_user_decorater_1 = require("../auth/get-user.decorater");
const user_entity_1 = require("../auth/user.entity");
const company_service_1 = require("../company/company.service");
const user_role_enum_1 = require("../auth/user-role.enum");
const get_internships_fiter_dto_1 = require("./dto/get-internships-fiter.dto");
let InternshipController = InternshipController_1 = class InternshipController {
    constructor(internshipsService, companyService) {
        this.internshipsService = internshipsService;
        this.companyService = companyService;
        this.logger = new common_1.Logger(InternshipController_1.name);
    }
    getInternshipswithfilter(filterDto, user) {
        if (filterDto.notStatus && typeof filterDto.notStatus === 'string') {
            filterDto.notStatus = [filterDto.notStatus];
        }
        return this.internshipsService.getInternshipswithfilter(filterDto, user);
    }
    async getAllInternships(user) {
        return await this.internshipsService.getAllInternshipsByUser(user);
    }
    async getInternshipDetails(user) {
        if (user.role === user_role_enum_1.UserRole.DEPARTMENT ||
            user.role === user_role_enum_1.UserRole.FACULTY_DEAN ||
            user.role === user_role_enum_1.UserRole.INTERNSHIP_COORDINATOR ||
            user.role == user_role_enum_1.UserRole.STUDENT) {
            return this.internshipsService.findAllWithStudentNames();
        }
        else {
            return { message: 'Unauthorized' };
        }
    }
    async getAllInternshipsWithCompanyEvaluations(user) {
        if (user.role === user_role_enum_1.UserRole.STUDENT) {
            throw new common_1.ForbiddenException('You do not have permission to perform this action');
        }
        return await this.internshipsService.getAllInternshipsWithCompanyEvaluations();
    }
    async createInternship(createInternshipDto, user) {
        return this.internshipsService.createInternship(createInternshipDto, user);
    }
    deleteInternship(id, user) {
        return this.internshipsService.deleteInternship(id, user);
    }
    updateInternshipStatus(id, updateInternshipStatusDto, user) {
        const { status } = updateInternshipStatusDto;
        return this.internshipsService.updateInternshipStatus(id, status, user);
    }
};
exports.InternshipController = InternshipController;
__decorate([
    (0, common_1.Get)('/filter'),
    __param(0, (0, common_1.Query)(common_1.ValidationPipe)),
    __param(1, (0, get_user_decorater_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_internships_fiter_dto_1.GetInternshipFilterDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], InternshipController.prototype, "getInternshipswithfilter", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, get_user_decorater_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], InternshipController.prototype, "getAllInternships", null);
__decorate([
    (0, common_1.Get)('details'),
    __param(0, (0, get_user_decorater_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], InternshipController.prototype, "getInternshipDetails", null);
__decorate([
    (0, common_1.Get)('all-with-evaluations'),
    __param(0, (0, get_user_decorater_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], InternshipController.prototype, "getAllInternshipsWithCompanyEvaluations", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorater_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_internship_dto_1.CreateInternshipDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], InternshipController.prototype, "createInternship", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorater_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], InternshipController.prototype, "deleteInternship", null);
__decorate([
    (0, common_1.Patch)('/:id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorater_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_internship_status_dto_1.UpdateInternshipStatusDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], InternshipController.prototype, "updateInternshipStatus", null);
exports.InternshipController = InternshipController = InternshipController_1 = __decorate([
    (0, common_1.Controller)('internship'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [internships_service_1.InternshipsService,
        company_service_1.CompanyService])
], InternshipController);
//# sourceMappingURL=internship.controller.js.map