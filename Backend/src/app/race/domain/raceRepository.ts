import type { Race } from "./race.ts";
import type { RaceId } from "./raceId.ts";

export interface RaceRepository {
    create(race:Race): Promise<void>,
    getAll(): Promise<Race[]>,
    getOneById(raceId:RaceId): Promise<Race>,
    update(race:Race): Promise<void>,
    delete(raceId:RaceId): Promise<void>
}