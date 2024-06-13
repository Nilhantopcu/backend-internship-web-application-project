import { Internship } from 'src/internship/internship.entity';
import { BaseEntity } from 'typeorm';
export declare class FileEntity extends BaseEntity {
    id: string;
    Internship_Application_Form: string;
    Employer_Information_Form: string;
    Declaration_Commitment_Document: string;
    ID_Card_Photocopy: string;
    internship: Internship;
}
