import express from "express";

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('Pa chew Chewy Baby chomp Pa Chomp hey chomp');
});

export {router as currentUserRouter };