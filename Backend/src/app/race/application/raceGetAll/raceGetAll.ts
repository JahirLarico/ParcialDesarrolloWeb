import type { Race } from "../../domain/race.js";
import type { RaceRepository } from "../../domain/raceRepository.js";

export class RaceGetAll {
    constructor(private _raceRepository: RaceRepository){}
    async run(){
        const races: Race[] = await this._raceRepository.getAll();

        return races;
    }
}