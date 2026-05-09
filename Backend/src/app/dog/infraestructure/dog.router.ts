import { Router } from "express";
import { DogController } from "./dog.controller.js";

const dogRouter = Router();

const controller = new DogController();

dogRouter.post("/create", controller.create);
dogRouter.get("/getAll", controller.getAll);
dogRouter.get("/getOneById/:dogId", controller.getOneById);
dogRouter.post("/update", controller.update);
dogRouter.delete("/delete/:dogId", controller.delete);

export {dogRouter};