import { Pool, type ClientConfig, type QueryConfig } from "pg";
import type { RaceRepository } from "../../app/race/domain/raceRepository.js";
import type { Race } from "../../app/race/domain/race.js";

export class PgRaceRepository implements RaceRepository {
    client: Pool;

    constructor(dbConfig: ClientConfig){
        this.client = new Pool(dbConfig);
    }

    async getAll(): Promise<Race[]> {
        const query: QueryConfig = {
            text: "SELECT * FROM race",
        }

        const races: Race[] = (await this.client.query(query)).rows;

        return races;
    }
}