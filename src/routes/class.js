const { createClass, getClass, updateClass, deleteClass } = require("../handler/Class/classHndl");
const { routesRegister } = require("../utils/utils");

module.exports = async (fastify) => {
    fastify.log.info('Class route registration started');

    await routesRegister(fastify, [
        {
            method: 'POST',
            path: '/clsCrt', // Role for creating API routes
            handler: createClass,
        },
        {
            method: 'GET',
            path: '/clsGet', // Role for displaying API routes
            handler: getClass,
        },
       {
            method: 'PATCH',
            path: '/clsUpdt', // Role for updating API routes
            handler: updateClass,
        },
        {
            method: 'DELETE',
            path: '/clsDel', // Role for deleting API routes
            handler:deleteClass,
        }
    ]);

    fastify.log.info('Class route registration completed');
};