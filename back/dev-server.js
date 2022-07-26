const path = require('path');
const express = require('express');
const lambdaLocal = require('lambda-local');

const app = express();

app.use(express.text());

app.use('/lambda', async (req, res) => {
  const result = await lambdaLocal
    .execute({
      lambdaPath: path.join(__dirname, 'index'),
      lambdaHandler: 'handler',
      envfile: path.join(__dirname, '.env'),
      event: {
        headers: req.headers,
        body: req.body,
      },
    });

  res
    .status(result.statusCode)
    .set(result.headers)
    .end(result.body);
});

app.listen(8080, () => console.log('listening on port: 8080'));
