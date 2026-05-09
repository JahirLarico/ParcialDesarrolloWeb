import "dotenv/config";
import express, { type NextFunction, type Request, type Response } from "express";
import { raceRouter } from "./app/race/infraestructure/race.router.js";
import { employeeRouter } from "./app/employee/infraestructure/employee.router.js";
import { dogRouter } from "./app/dog/infraestructure/dog.router.js";

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req: Request, res: Response) => {
  res.send("hola");
});


app.use(express.json());
app.use("/race", raceRouter);
app.use("/employee", employeeRouter);
app.use("/dog", dogRouter);
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).send({
        message: err.message
    });
});


app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
