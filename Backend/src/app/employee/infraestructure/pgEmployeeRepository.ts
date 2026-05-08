import { Pool, type ClientConfig, type QueryConfig } from "pg";
import type { EmployeeRepository } from "../domain/employeeRepository.js";
import type { Employee } from "../domain/employee.js";
import type { PersonDni } from "../../../shared/domain/personDni.js";
import type { PersonId } from "../../../shared/domain/personId.js";

export class PgEmployeeRepository implements EmployeeRepository{
    client: Pool;
    constructor(dbConfig: ClientConfig){
        this.client = new Pool(dbConfig)
    }

    async create(employee: Employee): Promise<void> {
        
    }

    async getAll(): Promise<Employee[]> {
        const query: QueryConfig = {
            text: "SELECT * FROM employee"
        }

        const response: Employee[] = (await this.client.query(query)).rows;

        return response
    }

    async getOneByDni(employeeDni: PersonDni): Promise<Employee> {
        const query: QueryConfig = {
            text: "SELECT * FROM employee WHERE id = $1",
            values: [employeeDni.personDni]
        };

        const employee: Employee = (await this.client.query(query)).rows[0];

        return employee
    } 

    async update(employee: Employee): Promise<void> {
        
    }

    async delete(employeeId: PersonId): Promise<void> {
        
    }
}