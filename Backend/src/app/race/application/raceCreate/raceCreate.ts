import { Race } from "../../domain/race.js";
import { RaceName } from "../../domain/raceName.js";
import type { RaceRepository } from "../../domain/raceRepository.js";

export class RaceCreate {
    constructor (private _raceRepository: RaceRepository){}

    async run(
        raceName:string
    ):Promise<void>{
        const name = new RaceName(raceName)
        const race: Race = new Race(
            {name}
        )
        const response = await this._raceRepository.create(race);

        return response;
    }
}