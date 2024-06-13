/// <reference types="multer" />
import { InsuranceRepository } from './insurance.repository';
import { InternshipRepository } from 'src/internship/internships.repository';
import { Insurance } from './insurance.entity';
export declare class InsuranceService {
    private readonly insuranceRepository;
    private readonly internshipRepository;
    constructor(insuranceRepository: InsuranceRepository, internshipRepository: InternshipRepository);
    uploadInsurance(insurance: {
        InsuranceForm: Express.Multer.File;
    }, internshipId: string): Promise<Insurance>;
    getInsuranceByInternship(internshipId: string): Promise<Insurance[]>;
}
