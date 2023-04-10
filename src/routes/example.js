const { HelloWorld } = require("../handler/School/School");
const { routesRegister } = require("../utils/utils");

module.exports = async (fastify) => {
    fastify.log.info('Example route registration started');

    await routesRegister(fastify, [
        {
            method: 'GET',
            path: '/', // Example for creating API routes
            handler: HelloWorld,
        }
    ]);

    fastify.log.info('Example route registration completed');
};