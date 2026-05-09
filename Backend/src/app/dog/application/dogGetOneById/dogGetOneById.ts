import type { Dog } from "../../domain/dog.js";
import { DogId } from "../../domain/dogId.js";
import type { DogRepository } from "../../domain/dogRepository.js";

export class DogGetOneById{
    constructor (private _dogRepository: DogRepository){}

    async run(dogId: string): Promise<Dog>{
        const id: DogId = new DogId(dogId);
        const dog: Dog = await this._dogRepository.getOneById(id);

        if(!dog) throw new Error("Dog id doesn't exist");

        return dog;
    }
}