import "dotenv/config";
import express, { type Request, type Response } from "express";

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req: Request, res: Response) => {
  res.send("hola");
});
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
