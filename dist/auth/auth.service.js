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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const student_service_1 = require("../student/student.service");
const user_role_enum_1 = require("./user-role.enum");
const department_service_1 = require("../department/department.service");
const faculty_service_1 = require("../faculty/faculty.service");
const coordinator_service_1 = require("../coordinator/coordinator.service");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService, studentService, departmentService, facultyService, coordinatorService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.studentService = studentService;
        this.departmentService = departmentService;
        this.facultyService = facultyService;
        this.coordinatorService = coordinatorService;
    }
    async signUp(authCredentialsDto) {
        const { email, password, role, IDno, name, surname, studentId, studentPhoneNumber, studentAddress, departmentName, facultyName, } = authCredentialsDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.usersRepository.create({
            email,
            password: hashedPassword,
            role,
        });
        if (role === user_role_enum_1.UserRole.STUDENT) {
            const student = await this.studentService.createStudent({
                IDno,
                name,
                surname,
                studentId,
                studentPhoneNumber,
                studentAddress,
                departmentName,
                facultyName,
            });
            user.student = student;
        }
        else if (role == user_role_enum_1.UserRole.DEPARTMENT) {
            const deparment = await this.departmentService.createDeparment({
                IDno,
                name,
                surname,
                departmentName,
                facultyName,
            });
            user.deparment = deparment;
        }
        else if (role == user_role_enum_1.UserRole.FACULTY_DEAN) {
            const faculty = await this.facultyService.createFaculty({
                IDno,
                name,
                surname,
                facultyName,
            });
            user.faculty = faculty;
        }
        else if (role == user_role_enum_1.UserRole.INTERNSHIP_COORDINATOR) {
            const coordinator = await this.coordinatorService.createCoordinaor({
                IDno,
                name,
                surname,
            });
            user.coordinator = coordinator;
        }
        return this.usersRepository.save(user);
    }
    async signIn(authSigninDto) {
        const { email, password } = authSigninDto;
        const user = await this.usersRepository.findOne({ where: { email } });
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { email, role: user.role };
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken };
        }
        else {
            throw new common_1.UnauthorizedException('Please check your login credentials');
        }
    }
    async getUserByEmail(email) {
        return this.usersRepository.findOne({ where: { email } });
    }
    async findById(id) {
        return this.usersRepository.findOne({ where: { id } });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UserRepository,
        jwt_1.JwtService,
        student_service_1.StudentService,
        department_service_1.DepartmentService,
        faculty_service_1.FacultyService,
        coordinator_service_1.CoordinatorService])
], AuthService);
//# sourceMappingURL=auth.service.js.map