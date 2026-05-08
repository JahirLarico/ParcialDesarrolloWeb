import { RaceCreate } from "../../app/race/application/raceCreate/raceCreate.js";
import { RaceGetAll } from "../../app/race/application/raceGetAll/raceGetAll.js";
import { dbConfig } from "../../dataBase/pgConecction.js";
import { PgRaceRepository } from "./pgRaceRepository.js";

const RaceRepository = new PgRaceRepository(dbConfig);

export const ServiceContainer = {
    employee: {
        
    },
    dog: {

    },
    race: {
        create: new RaceCreate(RaceRepository),
        getAll: new RaceGetAll(RaceRepository),
        update: new RaceUpdate(RaceRepository),
        delete: new RaceDelete(RaceRepository)
    }
}