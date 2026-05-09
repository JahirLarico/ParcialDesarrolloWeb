import type { DogAge } from "./dogAge.js";
import type { DogId } from "./dogId.js";
import type { DogName } from "./dogName.js";
import type { DogRaceId } from "./dogRaceId.js";

type dogPropos = {
    id?: DogId,
    name: DogName,
    age: DogAge,
    raceId: DogRaceId
}
export class Dog {
    id?: DogId | undefined;
    name: DogName;
    age: DogAge;
    raceId: DogRaceId;
    constructor({id, name, age, raceId}: dogPropos){
        this.id = id;
        this.name = name;
        this.age = age;
        this.raceId = raceId;
    }
}