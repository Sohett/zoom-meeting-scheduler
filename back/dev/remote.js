const axios = require('axios');
const data = JSON.stringify(require('./cases/1'));

const REMOTE_SERVER_URI = '';

const options = {
  url: REMOTE_SERVER_URI,
  method: 'POST',
  headers: {
    'X-Api-Key': 'XXX',
  },
  data,
};

// eslint-disable-next-line no-console
axios(options)
  .then((res) => console.log(res.data));
