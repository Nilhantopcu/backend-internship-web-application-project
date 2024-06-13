"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const department_entity_1 = require("./department.entity");
let DepartmentRepository = class DepartmentRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(department_entity_1.Department, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async createDeparment(createDepartmentDto) {
        const { IDno, name, surname, departmentName, facultyName } = createDepartmentDto;
        const departmet = this.create({
            IDno,
            name,
            surname,
            departmentName,
            facultyName,
        });
        await this.save(departmet);
        return departmet;
    }
};
exports.DepartmentRepository = DepartmentRepository;
exports.DepartmentRepository = DepartmentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], DepartmentRepository);
//# sourceMappingURL=department.repository.js.map