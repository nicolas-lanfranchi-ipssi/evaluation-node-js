const express = require('express');
const {register, signin} = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/signin', signin);

module.exports = userRouter;