import { PersonDni } from "../../../../shared/domain/personDni.js";
import type { Employee } from "../../domain/employee.js";
import type { EmployeeRepository } from "../../domain/employeeRepository.js";

export class EmployeeGetOneByDni{
    constructor (private _employeeRepository: EmployeeRepository){}

    async run(employeeDni: string): Promise<Employee>{
        const dni: PersonDni = new PersonDni(employeeDni);
        const employee: Employee = await this._employeeRepository.getOneByDni(dni);

        if(!employee) throw new Error("Employee doesn't exist")

        return employee;
    }
}