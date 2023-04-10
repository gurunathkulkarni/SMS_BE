const { getUserDetails } = require("../handler/User/userAuth");
const { routesRegister } = require("../utils/utils");

module.exports = async (fastify) => {
    fastify.log.info('User route registration started');

    await routesRegister(fastify, [
        {
            method: 'GET',
            path: '/user', // Example for creating API routes
            handler: getUserDetails,
        }
    ]);

    fastify.log.info('User route registration completed');
};