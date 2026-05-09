import { EmployeeCreate } from "../../app/employee/application/employeeCreate/employeeCreate.js";
import { EmployeeDelete } from "../../app/employee/application/employeeDelete/employeeDelete.js";
import { EmployeeGetAll } from "../../app/employee/application/employeeGetAll/employeeGetAll.js";
import { EmployeeGetOneByDni } from "../../app/employee/application/employeeGetOneByDni/employeeGetOneByDni.js";
import { EmployeeUpdate } from "../../app/employee/application/employeeUpdate/employeeUpdate.js";
import { Employee } from "../../app/employee/domain/employee.js";
import { PgEmployeeRepository } from "../../app/employee/infraestructure/pgEmployeeRepository.js";
import { RaceCreate } from "../../app/race/application/raceCreate/raceCreate.js";
import { RaceDelete } from "../../app/race/application/raceDelete/raceDelete.js";
import { RaceGetAll } from "../../app/race/application/raceGetAll/raceGetAll.js";
import { RaceGetOneById } from "../../app/race/application/raceGetOneById/raceGetOneById.js";
import { RaceUpdate } from "../../app/race/application/raceUpdate/raceUpdate.js";
import { PgRaceRepository } from "../../app/race/infraestructure/pgRaceRepository.js";
import { dbConfig } from "../../dataBase/pgConecction.js";

const RaceRepository = new PgRaceRepository(dbConfig);
const EmployeeRepository = new PgEmployeeRepository(dbConfig);

export const ServiceContainer = {
    employee: {
        create: new EmployeeCreate(EmployeeRepository),
        getAll: new EmployeeGetAll(EmployeeRepository),
        getOneByDni: new EmployeeGetOneByDni(EmployeeRepository),
        update: new EmployeeUpdate(EmployeeRepository),
        delete: new EmployeeDelete(EmployeeRepository)
    },
    dog: {

    },
    race: {
        create: new RaceCreate(RaceRepository),
        getAll: new RaceGetAll(RaceRepository),
        getOneById: new RaceGetOneById(RaceRepository),
        update: new RaceUpdate(RaceRepository),
        delete: new RaceDelete(RaceRepository)
    }
}