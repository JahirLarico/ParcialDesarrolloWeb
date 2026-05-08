import type { Race } from "../../domain/race.ts";
import type { RaceRepository } from "../../domain/raceRepository.ts";

export class RaceGetAll {
    constructor(private _raceRepository: RaceRepository){}
    async run(){
        const races: Race[] = await this._raceRepository.getAll();

        return races;
    }
}