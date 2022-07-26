const { Validator } = require('jsonschema');

const schema = {
  title: 'ZoomMeetingCreater',
  type: 'object',
  properties: {
    meetingStart: { type: 'string', format: 'date-time' },
    meetingDuration: { type: 'integer', minimum: 1 },
    meetingTopic: { type: 'string' },
  },
  required: ['meetingStart', 'meetingDuration', 'meetingTopic'],
};

const validatePayload = (payload) => {
  const v = new Validator();
  const result = v.validate(payload, schema);
  return { valid: result.valid, errors: result.errors.map((error) => `${error.property}: ${error.message}`) };
};

module.exports = { schema, validatePayload };
