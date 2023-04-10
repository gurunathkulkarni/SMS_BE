const { createRole, getRole } = require("../handler/Role/role");
const { routesRegister } = require("../utils/utils");

module.exports = async (fastify) => {
    fastify.log.info('Role route registration started');

    await routesRegister(fastify, [
        {
            method: 'POST',
            path: '/role', // Role for creating API routes
            handler: createRole,
        },
        {
            method: 'GET',
            path: '/role', // Role for creating API routes
            handler: getRole,
        }
    ]);

    fastify.log.info('Role route registration completed');
};