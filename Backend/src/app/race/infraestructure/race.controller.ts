import { type NextFunction, type Request, type Response } from "express";
import { ServiceContainer } from "../../../shared/infraestructure/serviceContainer.js";
import type { Race } from "../domain/race.ts";
export class RaceController {

    async create(req: Request, res: Response, next: NextFunction){
        try{
            const {raceName} = req.body as {
                raceName:string
            };

            const response = await ServiceContainer.race.create.run(raceName)

            return res.status(201).json({
                message: "Race Created"
            });
        }
        catch(e){
            next(e);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try{
            const races: Race[] = await ServiceContainer.race.getAll.run();

            return res.status(200).json(races);
        }
        catch(e){
            next(e);
        }
    } 

    async getOneById(req: Request, res: Response, next: NextFunction){
        try{
            const raceId: string = req.params.raceId as string;

            const race: Race = await ServiceContainer.race.getOneById.run(raceId);
            if (!race) res.status(400).json({
                message: "Race doesn't found"
            });
            return res.status(200).json(race);
        }
        catch(e){
            next(e);
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try{
            const {raceId, raceName} = req.body as {
                raceId: string,
                raceName: string
            }

            const response = await ServiceContainer.race.update.run(raceId, raceName);

            return res.status(200).json({
                message: "Race Updated"
            });
        }
        catch(e){
            next(e);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction){
        try{
            const raceId: string = req.params.raceId as string;

            const response = await ServiceContainer.race.delete.run(raceId);

            return res.status(200).json({
                message: "Race Deleted"
            });
        }
        catch(e){
            next(e);
        }
    }
}