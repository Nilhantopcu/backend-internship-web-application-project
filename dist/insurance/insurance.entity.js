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
exports.Insurance = void 0;
const internship_entity_1 = require("../internship/internship.entity");
const typeorm_1 = require("typeorm");
let Insurance = class Insurance extends typeorm_1.BaseEntity {
};
exports.Insurance = Insurance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Insurance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Insurance.prototype, "InsuranceForm", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => internship_entity_1.Internship, (internship) => internship.insurance, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", internship_entity_1.Internship)
], Insurance.prototype, "internship", void 0);
exports.Insurance = Insurance = __decorate([
    (0, typeorm_1.Entity)()
], Insurance);
//# sourceMappingURL=insurance.entity.js.map