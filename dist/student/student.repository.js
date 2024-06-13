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
exports.StudentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./student.entity");
let StudentRepository = class StudentRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(student_entity_1.Student, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async createStudent(createStudentDto) {
        const { IDno, name, surname, studentId, studentPhoneNumber, studentAddress, departmentName, facultyName, } = createStudentDto;
        const student = this.create({
            IDno,
            name,
            surname,
            studentId,
            studentPhoneNumber,
            studentAddress,
            departmentName,
            facultyName,
        });
        await this.save(student);
        return student;
    }
};
exports.StudentRepository = StudentRepository;
exports.StudentRepository = StudentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], StudentRepository);
//# sourceMappingURL=student.repository.js.map