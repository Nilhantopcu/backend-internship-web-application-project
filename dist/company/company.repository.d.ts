import { DataSource, Repository } from 'typeorm';
import { Company } from './company.entity';
import { GetCompanyFilterDto } from './dto/get-company-filter.dto';
import { User } from 'src/auth/user.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompanyRepository extends Repository<Company> {
    private datasource;
    constructor(datasource: DataSource);
    getCompanies(filterDto: GetCompanyFilterDto, user: User): Promise<Company[]>;
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
}
