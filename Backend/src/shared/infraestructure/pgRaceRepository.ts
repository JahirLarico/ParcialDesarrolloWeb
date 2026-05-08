import { Pool, type ClientConfig, type QueryConfig } from "pg";
import type { RaceRepository } from "../../app/race/domain/raceRepository.js";
import type { Race } from "../../app/race/domain/race.js";
import type { RaceId } from "../../app/race/domain/raceId.js";

export class PgRaceRepository implements RaceRepository {
    client: Pool;

    constructor(dbConfig: ClientConfig){
        this.client = new Pool(dbConfig);
    }
    async create(race: Race): Promise<void> {
        
    }

    
    async getAll(): Promise<Race[]> {
        const query: QueryConfig = {
            text: "SELECT * FROM race",
        }

        const races: Race[] = (await this.client.query(query)).rows;

        return races;
    }

    async update(raceId: RaceId): Promise<void> {
        
    }

    async delete(raceId: RaceId): Promise<void> {
        
    }
    
}