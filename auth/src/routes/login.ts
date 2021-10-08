import express, { Request, Response } from "express";
import { body } from 'express-validator';
import jwt from'jsonwebtoken';

import { Password } from '../services/password';
import { User } from '../models/user';
import { validateRequest } from "../middlewares/validate-request";
import { BadRequestError} from "../errors/BadRequestError";


const router = express.Router();

router.post('/api/users/login',
    [
        body('email')
            .isEmail()
            .withMessage('Chew Pa pa Mail bubba Chomp'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('Needs to see you Passing Password')
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { email, password } = req.body

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new BadRequestError('U Bad Chewy Chomp');
        }

        const passwordsMatch = await Password.compare(existingUser.password,
            password
        );
        if (!passwordsMatch) {
            throw new BadRequestError('Pa Ba Chewy Me Bad');
        }
        // make a JWT
        const userJwt = jwt.sign(
            {
                id: existingUser.id,
                email: existingUser.email
            },
            process.env.jwt!
        );

        // save jwt to the cookie
        req.session = {
            jwt: userJwt
        };

        res.status(201).send(existingUser);
    }
);

export { router as loginRouter };