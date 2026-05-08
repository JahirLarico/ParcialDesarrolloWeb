import { Pool, type ClientConfig, type QueryConfig } from "pg";
import type { RaceRepository } from "../domain/raceRepository.ts";
import { Race } from "../domain/race.js";
import type { RaceId } from "../domain/raceId.ts";

export class PgRaceRepository implements RaceRepository {
    client: Pool;

    constructor(dbConfig: ClientConfig){
        this.client = new Pool(dbConfig);
    }
    async create(race: Race): Promise<void> {
        const query: QueryConfig = {
            text: "INSERT INTO race (name) VALUES ($1)",
            values: [race.name.raceName]
        };

        const response = await this.client.query(query);
    }

    
    async getAll(): Promise<Race[]> {
        const query: QueryConfig = {
            text: "SELECT * FROM race",
        }

        const races: Race[] = (await this.client.query(query)).rows;

        return races;
    }

    async getOneById(raceId: RaceId): Promise<Race> {
        const query: QueryConfig = {
            text: "SELECT * FROM race WHERE id = $1",
            values: [raceId.raceId]
        };

        const race: Race = (await this.client.query(query)).rows[0];

        return race;
    }

    async update(race: Race): Promise<void> {
        const query: QueryConfig = {
            text: "UPDATE race SET name = $2 WHERE id = $1",
            values: [race.id?.raceId, race.name.raceName]
        }

        const response = await this.client.query(query);
    }

    async delete(raceId: RaceId): Promise<void> {
        const query: QueryConfig = {
            text: "DELETE FROM race WHERE id = $1",
            values: [raceId.raceId]
        };

        const response = await this.client.query(query);
    }
    
}