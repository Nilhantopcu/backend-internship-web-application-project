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
exports.CompanyRepository = void 0;
const typeorm_1 = require("typeorm");
const company_entity_1 = require("./company.entity");
const common_1 = require("@nestjs/common");
let CompanyRepository = class CompanyRepository extends typeorm_1.Repository {
    constructor(datasource) {
        super(company_entity_1.Company, datasource.createEntityManager());
        this.datasource = datasource;
    }
    async getCompanies(filterDto, user) {
        const { search } = filterDto;
        const query = this.createQueryBuilder('company');
        query.where({ user });
        if (search) {
            query.andWhere('(LOWER(company.companyName) LIKE LOWER(:search) OR LOWER(company.productionArea) LIKE LOWER(:search))', { search: `%${search}` });
        }
        const company = await query.getMany();
        return company;
    }
    async createCompany(createCompanyDto) {
        const { companyName, productionArea, companyPhoneNumber, companyEmailAddress, companyAddress, } = createCompanyDto;
        const company = this.create({
            companyName,
            productionArea,
            companyPhoneNumber,
            companyEmailAddress,
            companyAddress,
        });
        await this.save(company);
        return company;
    }
};
exports.CompanyRepository = CompanyRepository;
exports.CompanyRepository = CompanyRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], CompanyRepository);
//# sourceMappingURL=company.repository.js.map