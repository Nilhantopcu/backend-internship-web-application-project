import { UserRole } from '../user-role.enum';
export declare class AuthCreadentialsDto {
    email: string;
    password: string;
    role: UserRole;
    IDno: string;
    name: string;
    surname: string;
    studentId?: string;
    studentPhoneNumber?: string;
    studentAddress?: string;
    departmentName?: string;
    facultyName?: string;
    departmentId?: string;
}
