import express, { Request, Response } from "express";
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { validateRequest } from "../middlewares/validate-request";
import { User } from  '../models/user';
import { BadRequestError } from "../errors/BadRequestError";

const router = express.Router();

router.post(
    '/api/users/register',
    [
    body('email')
        .isEmail()
        .withMessage('Email must be frikkin valid dude'),
    body('password')
        .trim()
        .isLength({ min: 7, max: 23 })
        .withMessage('Password needs to be 8 characters at least.....')
],
    validateRequest,
    async (req: Request, res: Response) => {
        const { firstName, lastName, username, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new BadRequestError('Already Cha ChomP Email Chewy');
        }

        const user = User.build({ firstName, lastName, username, email, password  });
        await user.save();

        // make a JWT
        const userJwt = jwt.sign(
            {
            id: user.id,
            email: user.email
        },
            process.env.jwt!
        );

        // save jwt to the cookie
        req.session = {
            jwt: userJwt
        };

        res.status(201).send(user);
    }
);
export { router as registerRouter };