import { Pool, type ClientConfig, type QueryConfig } from "pg";
import type { Dog } from "../domain/dog.js";
import type { DogId } from "../domain/dogId.js";
import type { DogRepository } from "../domain/dogRepository.js";

export class PgDogRepository implements DogRepository{
    client: Pool;

    constructor(dbConfig: ClientConfig){
        this.client = new Pool(dbConfig);
    }

    async create(dog: Dog): Promise<void> {
        const query: QueryConfig = {
            text: "INSERT INTO dog (name, age, raceId) VALUES ($1, $2, $3)",
            values: [dog.name.dogName, dog.age.dogAge, dog.raceId.dogRaceId]
        };

        const response = await this.client.query(query);
    }

    async getAll(): Promise<Dog[]> {
        const query: QueryConfig = {
            text: "SELECT * FROM dog"
        };

        const dogs: Dog[] = (await this.client.query(query)).rows;

        return dogs;
    }

    async getOneById(dogId: DogId): Promise<Dog> {
        const query: QueryConfig = {
            text: "SELECT * FROM dog WHERE id = $1",
            values: [dogId.dogId]
        };

        const dog: Dog = (await this.client.query(query)).rows[0];

        return dog;
    }

    async update(dog: Dog): Promise<void> {
        console.log(dog)
        const query: QueryConfig = {
            text: "UPDATE dog SET name = $1, age = $2, raceId = $3 WHERE id = $4",
            values: [dog.name.dogName, dog.age.dogAge, dog.raceId.dogRaceId, dog.id?.dogId]
        };

        const response = await this.client.query(query);
    }

    async delete(dogId: DogId): Promise<void> {
        const query: QueryConfig = {
            text: "DELETE FROM dog WHERE id = $1",
            values: [dogId.dogId]
        };

        const response = await this.client.query(query);
    }
}