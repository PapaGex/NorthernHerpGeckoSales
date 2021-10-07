import { Request, Response, NextFunction} from "express";
import { RequestValidationError} from "../errors/request-validation";
import { DatabaseConnectionError} from "../errors/database-connection";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof RequestValidationError) {
        console.log("Me Bad Request Ba chewy Validation Chomp!?");
    }

    if (err instanceof DatabaseConnectionError) {
        console.log("Pa Chewy DB CHewy Ba Ba Ba Base Chomp");
    }

    res.status(400).send({
        message: err.message
    });
};