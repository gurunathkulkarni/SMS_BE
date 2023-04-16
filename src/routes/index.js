// const common = require('./common')
const school = require('./school');
const user = require("./user");
const role = require("./role");
const cls=require("./class");

module.exports = async (fastify) => {
  fastify.log.info('Registering the routes started');
  await school(fastify);
  await user(fastify);
  await role(fastify);
  await cls(fastify);
  fastify.log.info('Registering the routes completed');
};





module.exports.cors = async (instance) => {
  return (req, callback) => {
    const corsOptions = {
      // This is NOT recommended for production as it enables reflection exploits
      origin: true
    };

    // do not include CORS headers for requests from localhost
    if (/^localhost$/m.test(req.headers.origin)) {
      corsOptions.origin = false
    }

    // callback expects two parameters: error and options
    callback(null, corsOptions)
  }
};