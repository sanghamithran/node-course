const app = require('./app');
// eslint-disable-next-line no-unused-vars

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
