require('dotenv').config();

const express = require('express');
const connection = require('./db');
const messageRouter = require('./routers/messageRouter');
const userRouter = require('./routers/userRouter');
const verifyTokenJwt = require('./middlewares/verifyTokenJwt');
const isAdmin = require('./middlewares/verifyAdmin');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();
app.use('/message', messageRouter);


const port = 3000;
app.listen(port);

app.use((request, response, next) => {
  console.log('je suis un middleware');

  console.log(request.cookies);
  next();
});


app.use('/users', userRouter);

app.get(
  '/',
  (request, response, next) => {
    console.log('Je suis un middleware de route racine');
    next();
  },
  async (request, response) => {
    response.send('Hello World!');
  },
);

app.get('/protected', verifyTokenJwt, isAdmin, (request, response) => {
  console.log('Aije quelque chose ? ', request.user);
  response.json({ message: 'Je suis protégé, non ?' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
