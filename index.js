const Fastify = require('fastify');
const routes = require('./src/routes');
const { swagger, cors } = require('./src/config/config');
const connect = require("./src/config/DB/index");


const fastify = Fastify({
    logger: true,
});
fastify.register(require('@fastify/helmet'));
fastify.register(require('@fastify/cors'), cors);
  
/**
 * Run the server!
 */
async function start() {
    try {
        // eslint-disable-next-line global-require
        await fastify.register(require('@fastify/swagger'), swagger);
      

        // register the routes
        await fastify.register(routes);
        fastify.swagger();
        await fastify.listen({ port: 3000 });
        // eslint-disable-next-line no-console
        // await dbConnection(config.server.db_url)
        connect();
        console.log(fastify.printRoutes());


    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
  start()

  module.exports=fastify