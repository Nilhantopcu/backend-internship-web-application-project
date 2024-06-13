import { BaseEntity } from 'typeorm';
import { Internship } from 'src/internship/Internship.entity';
import { Department } from 'src/department/department.entity';
export declare class Assessment extends BaseEntity {
    id: string;
    studentName: string;
    companyName: string;
    internshipNumber: string;
    companyEmailAddress: string;
    startDate: string;
    finishDate: string;
    internshipDuration: string;
    reportSufficiency: number;
    achievementLevel: number;
    willingness: number;
    attendance: number;
    behavior: number;
    knowledgeApplication: number;
    professionalInterest: number;
    additionalComments: string;
    authorizedPersonInfo: string;
    internship: Internship;
    department: Department;
}
