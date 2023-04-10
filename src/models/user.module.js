const mongoose = require("mongoose");

const ModelName = 'User';
const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, require: true, default: "unknown" },
    lastname: { type: String, require: true, default: "guest" },
    phoneNumber: {
      type: String,
      require: true,
      default: null,
      index: {
        unique: true,
        partialFilterExpression: { phoneNumber: { $type: "string" } },
      },
    },
    gender: { type: String, default: null },
    password: { type: String, default: null },
    userType: { type: String, default: "guest" },
    role:{type: String, default: null },
    
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const userModel = new mongoose.model(ModelName, userSchema);
module.exports = userModel;
