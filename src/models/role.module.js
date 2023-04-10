const mongoose = require("mongoose");

// create model name varaible
const ModelName = 'Role';

// this is used to create schema of mongoDb
const roleSchema = new mongoose.Schema(
{
    role_name: { type: 'String', default: null }
    // permission: { type:  }
    
},
{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
}
)

// used to create a model from moogoose
const roleModel = new mongoose.model(ModelName, roleSchema);
module.exports = roleModel;

