import { IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  IDno: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsNotEmpty()
  studentId: string;

  @IsNotEmpty()
  studentPhoneNumber: string;

  @IsNotEmpty()
  studentAddress: string;

  @IsNotEmpty()
  departmentName: string;

  @IsNotEmpty()
  facultyName: string;
}
