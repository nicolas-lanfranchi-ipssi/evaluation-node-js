const express = require('express');
const connection = require('./db');
const messageRouter = require('./routers/messageRouter');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();
app.use('/message', messageRouter);


const PORT = 3000;
app.listen(PORT);