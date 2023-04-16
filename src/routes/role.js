const { createRole, getRole, updateRole, deleteRole } = require("../handler/Role/roleHndl");
const { routesRegister } = require("../utils/utils");

module.exports = async (fastify) => {
    fastify.log.info('Role route registration started');

    await routesRegister(fastify, [
        {
            method: 'POST',
            path: '/roleCrt', // Role for creating API routes
            handler: createRole,
        },
        {
            method: 'GET',
            path: '/roleGet', // Role for displaying API routes
            handler: getRole,
        },
       {
            method: 'PATCH',
            path: '/roleUpdt', // Role for updating API routes
            handler: updateRole,
        },
        {
            method: 'DELETE',
            path: '/roleDel', // Role for deleting API routes
            handler:deleteRole,
        }
    ]);

    fastify.log.info('Role route registration completed');
};