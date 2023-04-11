const {
  getAllUserDetails,
  createUser,
  getUserById,
  deleteUserById,
  updateUser,
} = require("../handler/User/userAuth");
const { routesRegister } = require("../utils/utils");

module.exports = async (fastify) => {
  fastify.log.info("User route registration started");

  await routesRegister(fastify, [
    {
      method: "GET",
      path: "/user",
      handler: getAllUserDetails,
    },
    {
      method: "POST",
      path: "/user",
      handler: createUser,
    },
    {
      method: "GET",
      path: "/user/:id",
      handler: getUserById,
    },
    {
      method: "DELETE",
      path: "/user/:id",
      handler: deleteUserById,
    },
    {
      method: "PUT",
      path: "/user",
      handler: updateUser,
    },
  ]);

  fastify.log.info("User route registration completed");
};
