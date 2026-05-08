import type { NextFunction, Request, Response } from "express";
import type { Employee } from "../domain/employee.js";
import { ServiceContainer } from "../../../shared/infraestructure/serviceContainer.js";

export class EmployeeController {

    async create(req: Request, res: Response, next: NextFunction){
        try{
            
        }
        catch(e){
            next(e);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction){
        try{
            const Employees: Employee[] = await ServiceContainer.employee.getAll.run()
        }
        catch(e){
            next(e);
        }
    }
}