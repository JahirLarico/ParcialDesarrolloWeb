import { Race } from "../../domain/race.js";
import { RaceId } from "../../domain/raceId.js";
import type { RaceRepository } from "../../domain/raceRepository.js";

export class RaceGetOneById {
    constructor (private _raceRepository: RaceRepository){}

    async run(
        raceId:string
    ):Promise<Race>{
        const id: RaceId = new RaceId(raceId)
        const race: Race = await this._raceRepository.getOneById(id)
        if (!race) throw new Error("Race id doesn't exists")
            
        return race;
    }

}