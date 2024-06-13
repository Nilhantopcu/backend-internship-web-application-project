import { DataSource, Repository } from 'typeorm';
import { GetInternshipFilterDto } from './dto/get-internships-fiter.dto';
import { Internship } from './Internship.entity';
import { User } from 'src/auth/user.entity';
import { InternshipStatus } from './internship-status.enum';
import { CreateInternshipDto } from './dto/create-internship.dto';
export declare class InternshipRepository extends Repository<Internship> {
    private datasource;
    constructor(datasource: DataSource);
    getInterships(filterDto: GetInternshipFilterDto, user: User): Promise<Internship[]>;
    createInternship({ companyName, departmentName, internshipNumber, sameDepartmentGraduate, startDate, finishDate, internshipDays, correspondingPerson, }: CreateInternshipDto, user: User): Promise<Internship>;
    findInternshipsByStatusAndDate(status: InternshipStatus, date: string): Promise<Internship[]>;
}
