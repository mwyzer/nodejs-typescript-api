const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).send({
    response: 'Hello World',
  });
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});
