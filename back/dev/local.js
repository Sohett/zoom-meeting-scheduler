/* eslint-disable no-console */
require('dotenv').config({ silent: true });
/* eslint-disable no-console */
import { handler } from '../dist/index';
import event from ('./cases/1.json');

handler({ body: JSON.stringify(event) })
  .then((res) => console.log('\n\n', res));
