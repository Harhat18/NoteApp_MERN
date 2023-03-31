import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use((req, res, next) => {
  next(Error("Bulunamadı"));
});

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = " Birşeyler doğru gitmedi";
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({ error: errorMessage });
  }
);

export default app;
