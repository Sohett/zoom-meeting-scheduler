const axios = require('axios');

const { ZOOM_AUTH_URI, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET, ZOOM_CREATE_MEETING_URI } = process.env;

const postRequest = (config, payload = {}) => {
  const options = { ...config, data: payload };

  return axios(options);
};

const requestAccessToken = async () => {
  const config = {
    method: 'POST',
    url: ZOOM_AUTH_URI,
    auth: {
      username: ZOOM_CLIENT_ID,
      password: ZOOM_CLIENT_SECRET,
    },
  };

  const { data: { access_token } } = await postRequest(config);
  return access_token;
};

const createMeeting = async (accessToken, payload) => {
  const config = {
    method: 'POST',
    url: ZOOM_CREATE_MEETING_URI,
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  const meetingParams = {
    start_time: payload.meetingStart,
    topic: payload.meetingTopic,
    duration: payload.meetingDuration,
    type: 2,
    default_password: false,
  };

  const { data: { join_url } } = await postRequest(config, meetingParams);
  return join_url;
};

const processRequest = async (payload) => {
  const accessToken = await requestAccessToken(payload);
  const meetingInformation = await createMeeting(accessToken, payload);
  console.log('[MEETING INFO]', meetingInformation);
  return { meetingInformation };
};

module.exports = { processRequest };
