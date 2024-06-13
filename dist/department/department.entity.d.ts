import { Assessment } from 'src/assessment/assessment.entity';
import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Department extends BaseEntity {
    id: string;
    IDno: string;
    name: string;
    surname: string;
    departmentName: string;
    facultyName: string;
    user: User;
    assessments: Assessment[];
}
