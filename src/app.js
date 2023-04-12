const express = require('express');
const userRouter = require('./router/userRouter');
const loginRouter = require('./router/loginRouter');
const categoryRouter = require('./router/categoryRouter');
const postRouter = require('./router/postRouter');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

module.exports = app;
