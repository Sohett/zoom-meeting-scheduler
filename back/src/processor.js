const axios = require('axios');

const { ZOOM_AUTH_URI, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET } = process.env;

const requestAccessToken = async () => {
  const config = {
    method: 'POST',
    url: ZOOM_AUTH_URI,
    auth: {
      username: ZOOM_CLIENT_ID,
      password: ZOOM_CLIENT_SECRET,
    },
  };

  const { data: { access_token } } = await axios(config);
  return access_token;
};

const processRequest = async (payload) => {
  const accessToken = await requestAccessToken(payload);
  console.log('[ACCESS TOKEN]', accessToken);
  return { accessToken };
};

module.exports = { processRequest };
