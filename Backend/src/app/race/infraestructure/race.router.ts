import { Router } from "express";
import { RaceController } from "./race.controller.js";

const raceController = Router();

const controller = new RaceController();

raceController.get("/getAll", controller.getAll);

export {raceController} ;