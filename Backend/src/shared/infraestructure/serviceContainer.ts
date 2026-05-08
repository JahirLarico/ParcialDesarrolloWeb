import { RaceCreate } from "../../app/race/application/raceCreate/raceCreate.js";
import { RaceDelete } from "../../app/race/application/raceDelete/raceDelete.js";
import { RaceGetAll } from "../../app/race/application/raceGetAll/raceGetAll.js";
import { RaceGetOneById } from "../../app/race/application/raceGetOneById/raceGetOneById.js";
import { RaceUpdate } from "../../app/race/application/raceUpdate/raceUpdate.js";
import { PgRaceRepository } from "../../app/race/infraestructure/pgRaceRepository.js";
import { dbConfig } from "../../dataBase/pgConecction.js";

const RaceRepository = new PgRaceRepository(dbConfig);

export const ServiceContainer = {
    employee: {
        
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