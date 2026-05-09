import type { NextFunction, Request, Response } from "express";
import type { Dog } from "../domain/dog.js";
import { ServiceContainer } from "../../../shared/infraestructure/serviceContainer.js";
import type { DogId } from "../domain/dogId.js";
import type { Race } from "../../race/domain/race.js";

export class DogController {
    async create(req: Request, res: Response, next: NextFunction){
        try{
            const {name, age, raceId} = req.body as {
                name: string, age: string, raceId: string
            };
            const race: Race = await ServiceContainer.race.getOneById.run(raceId);
            const response = await ServiceContainer.dog.create.run(name, age, raceId);
        
            return res.status(201).json({
                message: "Dog Created"
            });
        }
        catch(e){
            next(e);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction){
        try{
            const dogs: Dog[] = await ServiceContainer.dog.getAll.run();

            return res.status(200).json(dogs)
        }
        catch(e){
            next(e);
        }
    }

    async getOneById(req: Request, res: Response, next: NextFunction){
        try{
            const id: string = req.params.dogId as string;

            const dog: Dog = await ServiceContainer.dog.getOneById.run(id);
            
            return res.status(200).json(dog);
        }
        catch(e){
            next(e);
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try{
            const {id, name, age, raceId} = req.body as {
                id:string, name: string, age: string, raceId: string
            };
            console.log(req.body)
            const response = await ServiceContainer.dog.update.run(id, name, age, raceId);
        
            return res.status(201).json({
                message: "Dog updated"
            });
        }
        catch(e){
            next(e);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction){
        try{
            const dogId = req.params.dogId as string;

            const response = await ServiceContainer.dog.delete.run(dogId);

            return res.status(200).json({
                message: "Dog Deleted"
            });
        }
        catch(e){
            next(e);
        }
    }
}