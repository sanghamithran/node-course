const express = require('express');
// eslint-disable-next-line no-unused-vars
const mongoose = require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// eslint-disable-next-line import/order
const multer = require('multer');

const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000,
  },
  // eslint-disable-next-line consistent-return
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Please upload Word Document'));
    }
    cb(undefined, true);
  },
});

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
