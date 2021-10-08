import { Request, Response, NextFunction } from "express";
import {Verbotten} from "../errors/verbotten";

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.currentUser) {
        throw new Verbotten();
    }

    next();
};