import express, { Request, Response } from "express";

const router = express.Router();

const actionIndex = (req: Request, res: Response) => {
  res.send('Express + TypeScript Server project')
};

router.use('/', actionIndex);

export default router;
