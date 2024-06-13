import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Faculty extends BaseEntity {
    id: string;
    IDno: string;
    name: string;
    surname: string;
    facultyName: string;
    user: User;
}
