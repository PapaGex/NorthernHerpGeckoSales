import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/currentUser';
import { loginRouter} from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { registerRouter } from "./routes/register";
import { errorHandler} from "./middlewares/error-handler";
import { FourZeroFour } from "./errors/four-zero-four";

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: true
    })
);

app.use(currentUserRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(registerRouter);

app.all('*', async (req, res) => {
    throw new FourZeroFour();
});

app.use(errorHandler);

const start = async () => {
    if (!process.env.jwt) {
        throw new Error('jwt must be chewy chomped');
    }
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('MONGO in da House');
    } catch (err) {
        console.log(err);
    }

    app.listen(3000, () => {
        console.log('port CHa Chomp 3000 ba Chewy');
    });
};

start();