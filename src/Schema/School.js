const Schoolbody = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string" },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

exports.postSchema = {
  description: "This is an endpoint for School",
  tags: ["School"],
  Schoolbody,
};
