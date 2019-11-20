const express = require('express');
// eslint-disable-next-line no-unused-vars
const mongoose = require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// eslint-disable-next-line import/order
const jwt = require('jsonwebtoken');

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thismynewcourse', { expiresIn: '7 days' });
  console.log(token);

  const data = jwt.verify(token, 'thismynewcourse');
  console.log(data);
};

myFunction();
