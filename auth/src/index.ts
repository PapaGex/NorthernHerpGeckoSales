import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/currentUser';
import { loginRouter} from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { registerRouter } from "./routes/register";
import { errorHandler} from "./middlewares/error-handler";
import { FourZeroFour } from "./errors/four-zero-four";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(registerRouter);

app.all('*', async (req, res) => {
    throw new FourZeroFour();
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log('port CHa Chomp 3000 ba Chewy');
});