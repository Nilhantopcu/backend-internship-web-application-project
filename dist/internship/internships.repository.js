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
exports.InternshipRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const Internship_entity_1 = require("./Internship.entity");
const internship_status_enum_1 = require("./internship-status.enum");
const user_role_enum_1 = require("../auth/user-role.enum");
let InternshipRepository = class InternshipRepository extends typeorm_1.Repository {
    constructor(datasource) {
        super(Internship_entity_1.Internship, datasource.createEntityManager());
        this.datasource = datasource;
    }
    async getInterships(filterDto, user) {
        const { status, notStatus, search } = filterDto;
        const query = this.createQueryBuilder('internship');
        if (user.role === user_role_enum_1.UserRole.DEPARTMENT) {
            query
                .leftJoinAndSelect('internship.user', 'user')
                .leftJoinAndSelect('user.student', 'student');
        }
        else {
            query.where({ user });
        }
        if (status) {
            query.andWhere('internship.status = :status', { status });
        }
        if (notStatus && notStatus.length > 0) {
            query.andWhere('internship.status NOT IN (:...notStatus)', { notStatus });
        }
        if (search) {
            query.andWhere('(LOWER(internship.title) LIKE LOWER(:search) OR LOWER(internship.description) LIKE LOWER(:search))', { search: `%${search}%` });
        }
        const internships = await query.getMany();
        return internships;
    }
    async createInternship({ companyName, departmentName, internshipNumber, sameDepartmentGraduate, startDate, finishDate, internshipDays, correspondingPerson, }, user) {
        const internship = this.create({
            companyName,
            departmentName,
            internshipNumber,
            sameDepartmentGraduate,
            startDate,
            finishDate,
            internshipDays,
            correspondingPerson,
            status: internship_status_enum_1.InternshipStatus.WAITING_IN_DEPARTMENT_HEAD,
            user,
        });
        await this.save(internship);
        return internship;
    }
    async findInternshipsByStatusAndDate(status, date) {
        return this.createQueryBuilder('internship')
            .where('internship.status = :status', { status })
            .andWhere('internship.finishDate = :date', { date })
            .getMany();
    }
};
exports.InternshipRepository = InternshipRepository;
exports.InternshipRepository = InternshipRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], InternshipRepository);
//# sourceMappingURL=internships.repository.js.map