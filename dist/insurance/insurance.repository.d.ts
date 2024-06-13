import { DataSource, Repository } from 'typeorm';
import { Insurance } from './insurance.entity';
export declare class InsuranceRepository extends Repository<Insurance> {
    private dataSource;
    constructor(dataSource: DataSource);
}
