import { Pool, type ClientConfig, type QueryConfig } from "pg";
import type { EmployeeRepository } from "../domain/employeeRepository.ts";
import type { Employee } from "../domain/employee.js";
import type { PersonDni } from "../../../shared/domain/personDni.js";
import type { PersonId } from "../../../shared/domain/personId.js";

export class PgEmployeeRepository implements EmployeeRepository{
    client: Pool;
    constructor(dbConfig: ClientConfig){
        this.client = new Pool(dbConfig)
    }

    async create(employee: Employee): Promise<void> {
        const password = employee.employeePassword.employeePassword;
        const query: QueryConfig = {
            text: "INSERT INTO employee (name, lastName, email, cellphone, dni, password) VALUES ($1, $2, $3, $4, $5, $6)",
            values: [employee.personName.personName, employee.personLastName.personLastName,
                employee.personEmail?.personEmail, employee.personCellphone.personCellphone,
                employee.personDni.personDni, password
            ]
        };

        const response = await this.client.query(query);
    }

    async getAll(): Promise<Employee[]> {
        const query: QueryConfig = {
            text: "SELECT * FROM employee"
        }

        const response: Employee[] = (await this.client.query(query)).rows;

        return response;
    }

    async getOneByDni(employeeDni: PersonDni): Promise<Employee> {
        const query: QueryConfig = {
            text: "SELECT * FROM employee WHERE dni = $1",
            values: [employeeDni.personDni]
        };

        const response: Employee = (await this.client.query(query)).rows[0];

        return response;
    } 

    async update(employee: Employee): Promise<void> {
        const password = employee.employeePassword.employeePassword;

        const query: QueryConfig = {
            text: "UPDATE employee SET name = $1, lastName = $2, email = $3, cellphone = $4, dni = $5, password = $6",
            values: [employee.personName.personName, employee.personLastName.personLastName,
                employee.personEmail?.personEmail, employee.personCellphone.personCellphone,
                employee.personDni.personDni, password
            ]
        };

        const response = await this.client.query(query);
    }

    async delete(employeeId: PersonId): Promise<void> {
        const query: QueryConfig = {
            text: "DELETE FROM employee WHERE id = $1",
            values: [employeeId.personId]
        };

        const response = await this.client.query(query);
    }
}