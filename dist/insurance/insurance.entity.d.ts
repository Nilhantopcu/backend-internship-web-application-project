import { Internship } from 'src/internship/internship.entity';
import { BaseEntity } from 'typeorm';
export declare class Insurance extends BaseEntity {
    id: string;
    InsuranceForm: string;
    internship: Internship;
}
