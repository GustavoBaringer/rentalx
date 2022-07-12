import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";

import { router } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();
const port = 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    return res.status(500).json({
        status: "error",
        message: `Internal Server Error: ${err.message}`,
    });
});

app.listen(port, () => console.log("🚀 listening on port " + port));
