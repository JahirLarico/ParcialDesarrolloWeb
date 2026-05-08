import { type NextFunction, type Request, type Response } from "express";
import { ServiceContainer } from "../../../shared/infraestructure/serviceContainer.js";
import type { Race } from "../domain/race.js";
export class RaceController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try{
            const races: Race[] = await ServiceContainer.race.getAll.run();

            return res.status(200).json(races);
        }
        catch(e){
            next(e);
        }
    } 
}