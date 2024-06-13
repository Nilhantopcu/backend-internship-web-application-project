import { InternshipStatus } from '../internship-status.enum';
export declare class GetInternshipFilterDto {
    status?: InternshipStatus;
    notStatus?: InternshipStatus[];
    search?: string;
}
