import axios from 'axios';
import event from './cases/1.json';

const REMOTE_SERVER_URI = '';

const options = {
  url: REMOTE_SERVER_URI,
  method: 'POST',
  headers: {
    'X-Api-Key': 'XXX',
  },
  data: JSON.stringify(event),
};

// eslint-disable-next-line no-console
axios(options)
  .then((res) => console.log(res.data));
