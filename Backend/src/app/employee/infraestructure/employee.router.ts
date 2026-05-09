import { Router } from "express";
import { EmployeeController } from "./employee.controller.js";

const employeeRouter = Router();

const controller = new EmployeeController();


employeeRouter.post("/create", controller.create);
employeeRouter.get("/getAll", controller.getAll);
employeeRouter.get("/getOneByDni/:employeeDni", controller.getOneByDni);
employeeRouter.post("/update", controller.update);
employeeRouter.delete("/delete/:employeeId", controller.delete);

export {employeeRouter};