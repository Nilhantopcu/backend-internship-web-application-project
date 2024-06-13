import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Student extends BaseEntity {
    id: string;
    IDno: string;
    name: string;
    surname: string;
    studentId: string;
    studentPhoneNumber: string;
    studentAddress: string;
    departmentName: string;
    facultyName: string;
    user: User;
}
