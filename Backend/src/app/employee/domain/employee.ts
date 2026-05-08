import { Person } from "../../../shared/domain/person.js";
import type { EmployeePassword } from "./employeePassword.js";

export class Employee extends Person {
    employeePassword: EmployeePassword

    constructor(employeePassword: EmployeePassword, personName: string, personLastName: string, personAge: string, personDni: string){
        super({personName, personAge, personDni, personLastName});
        this.employeePassword = employeePassword;
    }
}