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
var InternshipsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternshipsService = void 0;
const common_1 = require("@nestjs/common");
const internships_repository_1 = require("./internships.repository");
const internship_status_enum_1 = require("./internship-status.enum");
const company_service_1 = require("../company/company.service");
const users_repository_1 = require("../auth/users.repository");
const student_repository_1 = require("../student/student.repository");
const user_role_enum_1 = require("../auth/user-role.enum");
const company_evaluation_repository_1 = require("../company-evaluation/company-evaluation.repository");
const schedule_1 = require("@nestjs/schedule");
const nodemailer = require("nodemailer");
const moment = require("moment");
let InternshipsService = InternshipsService_1 = class InternshipsService {
    constructor(internshipsRepository, companyService, userRepository, studentRepository, companyEvaluationRepository) {
        this.internshipsRepository = internshipsRepository;
        this.companyService = companyService;
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.companyEvaluationRepository = companyEvaluationRepository;
        this.logger = new common_1.Logger(InternshipsService_1.name);
    }
    async checkAndCompleteInternships() {
        const today = moment().format('MM-DD-YYYY');
        this.logger.debug(`Running cron job for date: ${today}`);
        const internshipsToUpdate = await this.internshipsRepository.find({
            where: { status: internship_status_enum_1.InternshipStatus.INSURANCE_UPLOADED },
        });
        for (const internship of internshipsToUpdate) {
            const finishDate = moment(internship.finishDate, 'MM-DD-YYYY');
            if (finishDate.isSame(moment(), 'day')) {
                internship.status = internship_status_enum_1.InternshipStatus.COMPLETED;
                await this.internshipsRepository.save(internship);
                this.logger.debug(`Updated internship ID ${internship.id} to COMPLETED`);
            }
        }
    }
    getInternshipswithfilter(filterDto, user) {
        return this.internshipsRepository.getInterships(filterDto, user);
    }
    async getIntershipById(id) {
        const found = await this.internshipsRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!found) {
            throw new common_1.NotFoundException(`Internship with ID "${id}" not found`);
        }
        return found;
    }
    async getAllInternshipsByUser(user) {
        return await this.internshipsRepository.find({
            where: { user },
        });
    }
    async findAllWithStudentNames() {
        try {
            const internships = await this.internshipsRepository.find({
                relations: ['user', 'user.student'],
            });
            const result = internships.map((internship) => ({
                ...internship,
                studentName: `${internship.user.student.name} ${internship.user.student.surname}`,
            }));
            return result;
        }
        catch (error) {
            console.error('Error fetching internship details:', error);
            throw error;
        }
    }
    async getAllInternshipsWithCompanyEvaluations() {
        const internships = await this.internshipsRepository.find({
            relations: ['user', 'user.student', 'company'],
        });
        const result = await Promise.all(internships.map(async (internship) => {
            const companyEvaluation = await this.companyEvaluationRepository.findOne({
                where: { company: internship.company },
            });
            return {
                studentName: `${internship.user.student.name} ${internship.user.student.surname}`,
                studentDepartment: internship.user.student.departmentName,
                companyName: internship.company.companyName,
                companyDepartment: internship.departmentName,
                score: companyEvaluation?.score || null,
                notes: companyEvaluation?.notes || null,
                companyId: internship.company.id,
                companyEvaluationId: companyEvaluation?.id || null,
            };
        }));
        return result;
    }
    async createInternship(createInternshipDto, user) {
        const { companyName, departmentName, productionArea, companyPhoneNumber, companyEmailAddress, companyAddress, internshipNumber, sameDepartmentGraduate, startDate, finishDate, internshipDays, correspondingPerson, } = createInternshipDto;
        const createCompanyDto = {
            companyName,
            productionArea,
            companyPhoneNumber,
            companyEmailAddress,
            companyAddress,
        };
        const company = await this.companyService.createOrFindCompany(createCompanyDto);
        const internship = {
            companyName,
            departmentName,
            productionArea,
            companyPhoneNumber,
            companyEmailAddress,
            companyAddress,
            internshipNumber,
            sameDepartmentGraduate,
            startDate,
            finishDate,
            internshipDays,
            correspondingPerson,
            status: internship_status_enum_1.InternshipStatus.WAITING_IN_DEPARTMENT_HEAD,
            company,
            user,
        };
        try {
            console.log(internship);
        }
        catch (error) {
            console.log(error);
        }
        return await this.internshipsRepository.save(internship);
        console.log(internship);
        console.log(company);
    }
    async deleteInternship(id, user) {
        const result = await this.internshipsRepository.delete({ id, user });
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`Task with ID "${id}" not found`);
        }
        console.log(result);
    }
    async updateInternshipStatus(id, status, user) {
        const internship = await this.getIntershipById(id);
        if (user.role !== user_role_enum_1.UserRole.DEPARTMENT &&
            user.role !== user_role_enum_1.UserRole.FACULTY_DEAN &&
            user.role !== user_role_enum_1.UserRole.INTERNSHIP_COORDINATOR) {
            throw new common_1.ForbiddenException('You do not have permission to perform this action');
        }
        internship.status = status;
        await this.internshipsRepository.save(internship);
        return internship;
    }
    async handleCron() {
        const today = moment().format('DD-MM-YYYY');
        this.logger.debug(`Running cron job for date: ${today}`);
        const internships = await this.internshipsRepository.find({
            where: { finishDate: today, status: internship_status_enum_1.InternshipStatus.COMPLETED },
            relations: ['company', 'user'],
        });
        this.logger.debug(`Found ${internships.length} internships finishing today.`);
        for (const internship of internships) {
            if (internship.company && internship.company.companyEmailAddress) {
                await this.sendAssessmentFormEmail(internship.company.companyEmailAddress, internship.id);
                this.logger.debug(`Sent email to ${internship.company.companyEmailAddress}`);
            }
            if (internship.user && internship.user.email) {
                await this.sendEmailForUser(internship.user.email, internship.id);
                this.logger.debug(`Sent email to user ${internship.user.email}`);
            }
        }
    }
    async sendEmailForUser(email, internshipId) {
        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: 'your-email@hotmail.com',
                pass: 'your-email-password',
            },
        });
        const mailOptions = {
            from: 'your-email@hotmail.com',
            to: email,
            subject: 'Internship Completion Notification',
            text: `Your internship with ID: ${internshipId} has been completed successfully.`,
        };
        await transporter.sendMail(mailOptions);
    }
    async sendAssessmentFormEmail(email, internshipId) {
        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: 'nilhan.t@hotmail.com',
                pass: 'Bilgen321.',
            },
        });
        const mailOptions = {
            from: 'nilhan.t@hotmail.com',
            to: email,
            subject: 'Assessment Form',
            text: `Please fill out the assessment form for the internship. Link: http://127.0.0.1:5502/view/internship_assesment_form/internship_assesment_form.html?internshipId=${internshipId}`,
        };
        await transporter.sendMail(mailOptions);
        return { message: 'Email sent successfully' };
    }
};
exports.InternshipsService = InternshipsService;
__decorate([
    (0, schedule_1.Cron)('* * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InternshipsService.prototype, "checkAndCompleteInternships", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InternshipsService.prototype, "handleCron", null);
exports.InternshipsService = InternshipsService = InternshipsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [internships_repository_1.InternshipRepository,
        company_service_1.CompanyService,
        users_repository_1.UserRepository,
        student_repository_1.StudentRepository,
        company_evaluation_repository_1.CompanyEvaluationRepository])
], InternshipsService);
//# sourceMappingURL=internships.service.js.map