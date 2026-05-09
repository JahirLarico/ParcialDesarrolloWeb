import { Employee } from "../../domain/employee.js";
import { EmployeePassword } from "../../domain/employeePassword.js";
import type { EmployeeRepository } from "../../domain/employeeRepository.js";

export class EmployeeCreate {
    constructor (private _employeeRepository: EmployeeRepository){}

    async run(employeeName: string, employeeLastName:string,
        employeeAge: string, employeeDni: string, employeeCellphone:string, 
        employeeEmail:string, employeePassword: string
    ): Promise<void>{
        const employee: Employee = new Employee(
            new EmployeePassword(employeePassword),
            employeeName, employeeLastName, employeeAge,  employeeDni, 
            employeeCellphone, employeeEmail
        )

        const response = await this._employeeRepository.create(employee);
    }
}