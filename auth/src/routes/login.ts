import express from "express";

const router = express.Router();

router.post('/api/users/login', (req, res) => {
    res.send('Hey Baby');
});

export {router as loginRouter };