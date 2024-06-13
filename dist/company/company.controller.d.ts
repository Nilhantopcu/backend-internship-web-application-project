import { CompanyService } from './company.service';
import { GetCompanyFilterDto } from './dto/get-company-filter.dto';
import { Company } from './company.entity';
import { User } from 'src/auth/user.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompanyController {
    private companyService;
    constructor(companyService: CompanyService);
    getCompanies(filterDto: GetCompanyFilterDto, user: User): Promise<Company[]>;
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    getCompanyByName(companyName: string): Promise<Company>;
}
