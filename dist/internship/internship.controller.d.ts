import { CreateInternshipDto } from './dto/create-internship.dto';
import { Internship } from './Internship.entity';
import { UpdateInternshipStatusDto } from './dto/update-internship-status.dto';
import { InternshipsService } from './internships.service';
import { User } from 'src/auth/user.entity';
import { CompanyService } from 'src/company/company.service';
import { GetInternshipFilterDto } from './dto/get-internships-fiter.dto';
export declare class InternshipController {
    private internshipsService;
    private companyService;
    private readonly logger;
    constructor(internshipsService: InternshipsService, companyService: CompanyService);
    getInternshipswithfilter(filterDto: GetInternshipFilterDto, user: User): Promise<Internship[]>;
    getAllInternships(user: User): Promise<Internship[]>;
    getInternshipDetails(user: User): Promise<any[] | {
        message: string;
    }>;
    getAllInternshipsWithCompanyEvaluations(user: User): Promise<any[]>;
    createInternship(createInternshipDto: CreateInternshipDto, user: User): Promise<Internship>;
    deleteInternship(id: string, user: User): Promise<void>;
    updateInternshipStatus(id: string, updateInternshipStatusDto: UpdateInternshipStatusDto, user: User): Promise<Internship>;
}
