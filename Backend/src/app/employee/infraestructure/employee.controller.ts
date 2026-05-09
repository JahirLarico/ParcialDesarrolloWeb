import type { NextFunction, Request, Response } from "express";
import { Employee } from "../domain/employee.js";
import { ServiceContainer } from "../../../shared/infraestructure/serviceContainer.js";
import bcrypt from 'bcrypt';
export class EmployeeController {

    async create(req: Request, res: Response, next: NextFunction){
        try{
            const {
                id, name, lastName, cellphone, email, 
                password, dni, age
            } = req.body as {
                id: string,name: string, lastName: string, cellphone: string, email: string, 
                password: string, dni: string, age: string 
            }
            bcrypt.hash(password, Number(process.env.SALTROUNDS) || 10, async function(err, hash) {
                if(err) {
                    return res.status(404).json({
                        message: err
                    })
                }
                const response = await ServiceContainer.employee.create.run(
                    name, lastName, age, dni, cellphone, email, hash
                );

                return res.status(201).json({
                    message: "Employee Created"
                });
            });

        }
        catch(e){
            next(e);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction){
        try{
            const Employees: Employee[] = await ServiceContainer.employee.getAll.run();

            return res.status(200).json(Employees);
        }
        catch(e){
            next(e);
        }
    }

    async getOneByDni(req: Request, res: Response, next: NextFunction){
        try{
            const dni = req.params.employeeDni as string;

            const employee: Employee = await ServiceContainer.employee.getOneByDni.run(dni);

            return res.status(200).json(employee);
        }
        catch(e){
            next(e);
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try{
             const {
                id, name, lastName, cellphone, email, 
                password, dni, age
            } = req.body as {
                id: string,name: string, lastName: string, cellphone: string, email: string, 
                password: string, dni: string, age: string 
            }
            
            const prevDataEmployee:any = await ServiceContainer.employee.getOneByDni.run(dni);
            console.log(prevDataEmployee.password)
            console.log(password)
            const isMatch: boolean = await bcrypt.compare(password, prevDataEmployee.password)
            
            if(!isMatch) throw new Error("Password doesn't match");

            bcrypt.hash(password, Number(process.env.SALTROUNDS) || 10, async function(err, hash){
                if (err){
                    return res.status(404).json({
                            message: err
                        })
                }

                const response = await ServiceContainer.employee.update.run(
                    id, name, lastName, age, dni, cellphone, email, hash
                );

                return res.status(200).json({
                    message: "Employee Updated"
                });
            })

        }
        catch(e){
            console.log(e)
            next(e);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.employeeId as string;
    
            const response = await ServiceContainer.employee.delete.run(id);
    
            return res.status(200).json({
                message: "Employee Deleted"
            });
        }
        catch(e){
            next(e);
        }
    }
}