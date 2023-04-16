const mongoose=require("mongoose");

const modelName="Role";
const roleSchema=mongoose.Schema(
    {
        Role_Id:{type:"Number", unique:true},
        Role_Name:{type:"String",require:true, default:null},
        isActive:{type:"Boolean",require:true, default:true},
        Created_Date:{type:"Date",require:true, default:Date.now},
        Modified_Date:{type:"Date",require:true, default:Date.now}
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
)
const roleModel=mongoose.model(modelName,roleSchema);
module.exports=roleModel;
