import { Router } from "express";
import { RaceController } from "./race.controller.js";

const controller = new RaceController();

const raceRouter = Router();

raceRouter.get("/getAll", controller.getAll);
raceRouter.get("/getOneById/:raceId", controller.getOneById);
raceRouter.post("/create", controller.create);
raceRouter.delete("/delete/:raceId", controller.delete);
raceRouter.post("/update", controller.update);

export {raceRouter} ;