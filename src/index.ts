import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const port: Number = 4000;

app.use(
  "/langgeng-mandiri",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ status: "200" });
  }
);
app.listen(port, () => console.log(`Suksess ${port}`));
