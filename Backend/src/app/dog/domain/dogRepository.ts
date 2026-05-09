import type { Dog } from "./dog.js";
import type { DogId } from "./dogId.js";

export interface DogRepository{
    create(dog: Dog): Promise<void>,
    getAll(): Promise<Dog[]>,
    getOneById(dogId: DogId): Promise<Dog>,
    update(dog: Dog): Promise<void>,
    delete(dogId: DogId): Promise<void>
}