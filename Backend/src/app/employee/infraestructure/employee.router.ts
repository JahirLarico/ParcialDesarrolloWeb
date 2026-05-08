import { Router } from "express";
import { EmployeeController } from "./employee.controller.js";

const employeeRouter = Router();

const controller = new EmployeeController();

employeeRouter.get("/getAll", controller.getAll);