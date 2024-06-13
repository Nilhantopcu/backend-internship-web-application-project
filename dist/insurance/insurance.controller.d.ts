/// <reference types="multer" />
import { InsuranceService } from './insurance.service';
import { Response } from 'express';
export declare class InsuranceController {
    private readonly insuranceService;
    constructor(insuranceService: InsuranceService);
    uploadFiles(insurance: Array<Express.Multer.File>, internshipId: string): Promise<import("./insurance.entity").Insurance>;
    getInsuranceByInternship(internshipId: string): Promise<import("./insurance.entity").Insurance[]>;
    downloadFile(filename: string, res: Response): Promise<any>;
}
