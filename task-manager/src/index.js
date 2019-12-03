const express = require('express');
// eslint-disable-next-line no-unused-vars
const mongoose = require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET is disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Site under maintenance');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
