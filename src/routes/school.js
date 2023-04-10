const { schoolSchema } = require("../Schema");
const { HelloWorld } = require("../handler/School/School");
const { routesRegister } = require("../utils/utils");

module.exports = async (fastify) => {
    fastify.log.info('School route registration started');

    await routesRegister(fastify, [
        {
            method: 'GET',
            path: '/schools/create', // Example for creating API routes
            // schema: schoolSchema.postSchema,
            handler: HelloWorld,
        }
    ]);

    fastify.log.info('School route registration completed');
};