/// <reference types="multer" />
import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadFiles(files: Array<Express.Multer.File>, internshipId: string): Promise<import("./file.entity").FileEntity>;
    getUploadedFiles(internshipId: string): Promise<import("./file.entity").FileEntity>;
}
