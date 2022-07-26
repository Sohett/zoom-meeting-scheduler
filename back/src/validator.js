import { Validator } from 'jsonschema';

const schema = {
  title: '',
  type: 'object',
  properties: {},
  required: [],
};

const validatePayload = (payload) => {
  const v = new Validator();
  const result = v.validate(payload, schema);
  return { valid: result.valid, errors: result.errors.map((error) => `${error.property}: ${error.message}`) };
};

module.exports = { schema, validatePayload };
