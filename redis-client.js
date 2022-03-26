const redis = require('redis');
const {promisify} = require('util');
const client = redis.createClient(process.env.REDIS_URL);

module.exports = {
  ...client,
  getAsync: promisify(client.zrange).bind(client),
  setAsync: promisify(client.zadd).bind(client),
  keysAsync: promisify(client.keys).bind(client)
};
