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
exports.FacultyService = void 0;
const common_1 = require("@nestjs/common");
const faculty_repository_1 = require("./faculty.repository");
let FacultyService = class FacultyService {
    constructor(facultyRepository) {
        this.facultyRepository = facultyRepository;
    }
    async createFaculty(createFacultyDto) {
        console.log(createFacultyDto);
        const { IDno } = createFacultyDto;
        let faculty = await this.facultyRepository.findOne({
            where: { IDno },
        });
        if (!faculty) {
            faculty = await this.facultyRepository.createFaculty(createFacultyDto);
        }
        else {
        }
        return faculty;
    }
};
exports.FacultyService = FacultyService;
exports.FacultyService = FacultyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [faculty_repository_1.FacultyRepository])
], FacultyService);
//# sourceMappingURL=faculty.service.js.map