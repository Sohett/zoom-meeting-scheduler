const { processRequest } = require('./src/processor');
const { validatePayload } = require('./src/validator');

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

exports.handler = async (event, context) => {
  console.log('[EVENT]', event);

  const { body } = event;
  let statusCode = 200;
  let success = true;
  let message = 'success';
  let data = null;

  try {
    const payload = JSON.parse(body);
    const { valid, errors } = validatePayload(payload);
    if (valid) {
      data = await processRequest(payload);
      console.log('[SUCCESS]', data);
    } else {
      statusCode = 422;
      success = false;
      message = `Params validated with JSON-schema. ${errors.join(' ; ')}`;
      console.warn(message);
    }
  } catch (error) {
    console.warn(error, { event, context });
    success = false;
    ({ message } = error);
    statusCode = error.statusCode || 500;
  }


  return {
    statusCode,
    headers,
    body: JSON.stringify({
      success,
      message,
      data,
    }),
  };
};
