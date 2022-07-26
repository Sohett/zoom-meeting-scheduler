const path = require('path');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const lambdaLocal = require('lambda-local');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/zoom-meeting-creater', async (req, res) => {
  const result = await lambdaLocal
    .execute({
      lambdaPath: path.join(__dirname, '../index'),
      lambdaHandler: 'handler',
      envfile: path.join(__dirname, '../.env'),
      event: {
        headers: req.headers,
        body: JSON.stringify(req.body),
      },
    });

  res
    .status(result.statusCode)
    .set(result.headers)
    .end(result.body);
});

app.listen(3000, () => console.log('listening on port: 3000'));
