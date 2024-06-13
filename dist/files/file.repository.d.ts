import { DataSource, Repository } from 'typeorm';
import { FileEntity } from './file.entity';
export declare class FileRepository extends Repository<FileEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
}
