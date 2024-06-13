/// <reference types="multer" />
import { FileRepository } from './file.repository';
import { InternshipRepository } from 'src/internship/internships.repository';
import { FileEntity } from './file.entity';
export declare class FilesService {
    private readonly fileRepository;
    private readonly internshipRepository;
    constructor(fileRepository: FileRepository, internshipRepository: InternshipRepository);
    uploadFiles(files: {
        Internship_Application_Form: Express.Multer.File;
        Employer_Information_Form: Express.Multer.File;
        Declaration_Commitment_Document: Express.Multer.File;
        ID_Card_Photocopy: Express.Multer.File;
    }, internshipId: string): Promise<FileEntity>;
    getUploadedFiles(internshipId: string): Promise<FileEntity>;
}
