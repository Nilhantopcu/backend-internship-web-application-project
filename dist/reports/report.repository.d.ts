import { DataSource, Repository } from 'typeorm';
import { Reports } from './report.entity';
import { UpdateInternshipStatusDto } from 'src/internship/dto/update-internship-status.dto';
export declare class ReportRepository extends Repository<Reports> {
    private dataSource;
    constructor(dataSource: DataSource);
    getReportsFilter(filterDto: UpdateInternshipStatusDto): Promise<Reports[]>;
}
