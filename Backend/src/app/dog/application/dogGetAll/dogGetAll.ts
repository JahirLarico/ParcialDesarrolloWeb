import type { Dog } from "../../domain/dog.js";
import type { DogRepository } from "../../domain/dogRepository.js";

export class DogGetAll {
    constructor (private _dogRepository: DogRepository){}

    async run(): Promise<Dog[]>{
        const dogs: Dog[] = await this._dogRepository.getAll();

        return dogs;
    }
}