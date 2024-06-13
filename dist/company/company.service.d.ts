import { CompanyRepository } from './company.repository';
import { GetCompanyFilterDto } from './dto/get-company-filter.dto';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { User } from 'src/auth/user.entity';
export declare class CompanyService {
    private readonly companyRepository;
    constructor(companyRepository: CompanyRepository);
    getCompanies(filterDto: GetCompanyFilterDto, user: User): Promise<Company[]>;
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    createOrFindCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findByName(companyName: string): Promise<Company>;
}
