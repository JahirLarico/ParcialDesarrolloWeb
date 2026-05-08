import type { Race } from "./race.js";
import type { RaceId } from "./raceId.js";

export interface RaceRepository {
    create(race:Race): Promise<void>,
    getAll(): Promise<Race[]>,
    update(raceId:RaceId): Promise<void>,
    delete(raceId:RaceId): Promise<void>
}