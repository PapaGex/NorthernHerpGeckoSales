import mongoose from 'mongoose';

import { app } from './app';

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