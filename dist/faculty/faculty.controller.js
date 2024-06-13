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
exports.FacultyController = void 0;
const common_1 = require("@nestjs/common");
const faculty_service_1 = require("./faculty.service");
const create_faculty_dto_1 = require("./dto/create-faculty.dto");
let FacultyController = class FacultyController {
    constructor(facultyService) {
        this.facultyService = facultyService;
    }
    createDepartment(createFacultyDto) {
        return this.facultyService.createFaculty(createFacultyDto);
    }
};
exports.FacultyController = FacultyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_faculty_dto_1.CreateFacultyDto]),
    __metadata("design:returntype", Promise)
], FacultyController.prototype, "createDepartment", null);
exports.FacultyController = FacultyController = __decorate([
    (0, common_1.Controller)('faculty'),
    __metadata("design:paramtypes", [faculty_service_1.FacultyService])
], FacultyController);
//# sourceMappingURL=faculty.controller.js.map