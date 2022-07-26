/* eslint-disable no-console */
require('dotenv').config({ silent: true });
/* eslint-disable no-console */
const { handler } = require('../index');
const data = JSON.stringify(require('./cases/1'));

handler({ body: data })
  .then((res) => console.log('\n\n', res));
