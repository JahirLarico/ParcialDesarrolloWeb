import type { Race } from "../../domain/race.ts";
import { RaceId } from "../../domain/raceId.js";
import type { RaceRepository } from "../../domain/raceRepository.ts";

export class RaceDelete{
    constructor (private _raceRepository: RaceRepository){}

    async run(
        raceId:string
    ): Promise<void>{
        const id: RaceId = new RaceId(raceId);
        const raceExist: Race = await this._raceRepository.getOneById(id);
        if (!raceExist) throw new Error("Race id doesn't exists");

        const response = await this._raceRepository.delete(id);

        return response;
    }
}