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
exports.User = void 0;
const Internship_entity_1 = require("../internship/Internship.entity");
const typeorm_1 = require("typeorm");
const user_role_enum_1 = require("./user-role.enum");
const student_entity_1 = require("../student/student.entity");
const department_entity_1 = require("../department/department.entity");
const faculty_entity_1 = require("../faculty/faculty.entity");
const coordinator_entity_1 = require("../coordinator/coordinator.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => student_entity_1.Student, (student) => student.user, {
        cascade: true,
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", student_entity_1.Student)
], User.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => department_entity_1.Department, (deparment) => deparment.user, {
        cascade: true,
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", department_entity_1.Department)
], User.prototype, "deparment", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => faculty_entity_1.Faculty, (faculty) => faculty.user, {
        cascade: true,
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", faculty_entity_1.Faculty)
], User.prototype, "faculty", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coordinator_entity_1.Coordinator, (coordinator) => coordinator.user, {
        cascade: true,
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", coordinator_entity_1.Coordinator)
], User.prototype, "coordinator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Internship_entity_1.Internship, (internship) => internship.user, {
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "internships", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map