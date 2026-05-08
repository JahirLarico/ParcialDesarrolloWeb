import type { RaceId } from "./raceId.ts";
import type { RaceName } from "./raceName.ts";

type raceProps = {
    id?: RaceId,
    name: RaceName
}

export class Race {
    id?: RaceId | undefined;
    name: RaceName;
    constructor({id, name}: raceProps){
        this.id = id,
        this.name = name
    }
}