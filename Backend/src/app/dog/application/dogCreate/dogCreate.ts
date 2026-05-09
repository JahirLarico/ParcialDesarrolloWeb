import { Dog } from "../../domain/dog.js";
import { DogAge } from "../../domain/dogAge.js";
import { DogName } from "../../domain/dogName.js";
import { DogRaceId } from "../../domain/dogRaceId.js";
import type { DogRepository } from "../../domain/dogRepository.js";

export class DogCreate {
    constructor (private _dogRepository: DogRepository){}

    async run(
        dogName: string, dogAge: string, dogRaceId: string
    ): Promise<void>{
        const name: DogName = new DogName(dogName);
        const age: DogAge = new DogAge(dogAge);
        const raceId: DogRaceId = new DogRaceId(dogRaceId); 
        const dog: Dog = new Dog(
            {
                name, age, raceId
            }
        )
        const response = await this._dogRepository.create(dog);
    }
}