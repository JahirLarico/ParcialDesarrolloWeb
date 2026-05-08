import type { PersonDni } from "../../../shared/domain/personDni.js";
import type { PersonId } from "../../../shared/domain/personId.js";
import type { Employee } from "./employee.js";

export interface EmployeeRepository {
    create(employee: Employee): Promise<void>,
    getAll(): Promise<Employee[]>,
    getOneByDni(employeeDni: PersonDni): Promise<Employee>,
    update(employee: Employee): Promise<void>,
    delete(employeeId: PersonId): Promise<void>
}