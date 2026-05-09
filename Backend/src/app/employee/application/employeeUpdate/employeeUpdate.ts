import { PersonDni } from "../../../../shared/domain/personDni.js";
import { Employee } from "../../domain/employee.js";
import { EmployeePassword } from "../../domain/employeePassword.js";
import type { EmployeeRepository } from "../../domain/employeeRepository.js";

export class EmployeeUpdate {
    constructor (private _employeeRepository: EmployeeRepository){}

    async run(
        employeeId: string, employeeName: string, employeeLastName:string,
        employeeAge: string, employeeDni: string, employeeCellphone:string, 
        employeeEmail:string, employeePassword: string
    ):Promise<void>{
        const dni:PersonDni = new PersonDni(employeeDni);

        const employeeExist: Employee = await this._employeeRepository.getOneByDni(dni);
        if (!employeeExist) throw new Error("Employee dni doesn't exist");
        const psw: EmployeePassword = new EmployeePassword(employeePassword);
        const employee: Employee = new Employee(
            psw, employeeName, employeeLastName, employeeAge,
            employeeDni, employeeCellphone, employeeEmail
        );

        const response = await this._employeeRepository.update(employee);
    }
}