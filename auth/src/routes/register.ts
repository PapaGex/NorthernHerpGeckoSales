import express, { Request, Response } from "express";
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from "../errors/request-validation";
import { DatabaseConnectionError } from "../errors/database-connection";

const router = express.Router();

router.post('/api/users/register', [
    body('email')
        .isEmail()
        .withMessage('Email must be frikkin valid dude'),
    body('password')
        .trim()
        .isLength({ min: 7, max: 23 })
        .withMessage('Password needs to be 8 characters at least.....')
],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        console.log('You are registering....');
        throw new DatabaseConnectionError();

        res.send({});
    }
    );

export { router as registerRouter };