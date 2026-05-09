import { PersonId } from "../../../../shared/domain/personId.js";
import type { Employee } from "../../domain/employee.js";
import type { EmployeeRepository } from "../../domain/employeeRepository.js";

export class EmployeeDelete {
    constructor (private _employeeRepository: EmployeeRepository){}

    async run(employeeId: string): Promise<void>{
        const id: PersonId = new PersonId(employeeId);
        const response = await this._employeeRepository.delete(id);
    }
}