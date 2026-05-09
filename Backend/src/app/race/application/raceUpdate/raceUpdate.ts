import { Race } from "../../domain/race.js";
import { RaceId } from "../../domain/raceId.js";
import { RaceName } from "../../domain/raceName.js";
import type { RaceRepository } from "../../domain/raceRepository.ts";

export class RaceUpdate {
    constructor (private _raceRepository: RaceRepository){}

    async run(
        raceId:string,
        raceName:string
    ):Promise<void>{
        const id:RaceId = new RaceId(raceId);

        const raceExist:Race = await this._raceRepository.getOneById(id);
        const name = new RaceName(raceName);
        if (!raceExist) throw new Error("Race id doesn't exist")
        const race = new Race(
            {name, id}
        )

        const response = await this._raceRepository.update(race)

        return response;
    }
}