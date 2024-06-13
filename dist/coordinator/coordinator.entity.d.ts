import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Coordinator extends BaseEntity {
    id: string;
    IDno: string;
    name: string;
    surname: string;
    user: User;
}
