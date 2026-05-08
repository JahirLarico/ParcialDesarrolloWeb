import type { Race } from "./race.js";

export interface RaceRepository {
    getAll(): Promise<Race[]>,
}