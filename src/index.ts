import express, { Request, Response } from "express";
import compression from "compression";
import indexController from "./controllers/index";

const PORT = 3000;
const app = express();

const shouldCompress = (req: Request, res: Response) => {
  // Will not compress responses, if this header is present
  if (req.headers["x-no-compression"]) return false;
  return compression.filter(req, res);
};

// Compress all HTTP responses
app.use(
  compression({
    filter: shouldCompress,
    threshold: 0,
  })
);

/* All Routes */
app.use(indexController);

/* Staring Server */
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
