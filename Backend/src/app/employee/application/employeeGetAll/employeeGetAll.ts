import type { Employee } from "../../domain/employee.js";
import type { EmployeeRepository } from "../../domain/employeeRepository.js";

export class EmployeeGetAll {
    constructor (private _employeeRepository: EmployeeRepository){}

    async run(): Promise<Employee[]>{
        const employees: Employee[] = await this._employeeRepository.getAll();

        return employees;
    }
}