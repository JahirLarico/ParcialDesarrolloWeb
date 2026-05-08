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
        getAll: new RaceGetAll(RaceRepository),
    }
}