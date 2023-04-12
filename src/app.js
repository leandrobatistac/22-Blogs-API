const express = require('express');
const userRouter = require('./router/userRouter');
const loginRouter = require('./router/loginRouter');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/users', userRouter);
app.use('/login', loginRouter);

module.exports = app;
