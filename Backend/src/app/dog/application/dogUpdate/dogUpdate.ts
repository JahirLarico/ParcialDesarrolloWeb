import { Dog } from "../../domain/dog.js";
import { DogAge } from "../../domain/dogAge.js";
import { DogId } from "../../domain/dogId.js";
import { DogName } from "../../domain/dogName.js";
import { DogRaceId } from "../../domain/dogRaceId.js";
import type { DogRepository } from "../../domain/dogRepository.js";

export class DogUpdate{
    constructor (private _dogRepository: DogRepository){}
    
    async run(
        dogId: string, dogName: string, dogAge: string, dogRaceId: string
    ): Promise<void>{
        const id: DogId = new DogId(dogId);
        const name: DogName = new DogName(dogName);
        const age: DogAge = new DogAge(dogAge);
        const raceId: DogRaceId = new DogRaceId(dogRaceId);

        const exist: Dog = await this._dogRepository.getOneById(id);
        if (!exist) throw new Error("Dog id doesn't exist");

        const dog: Dog = new Dog(
            {
                name, age, raceId, id
            }
        )
        const response = await this._dogRepository.update(dog);
    }
}