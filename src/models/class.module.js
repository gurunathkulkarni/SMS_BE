const mongoose=require("mongoose");
var moduleName="Class";
const classSchema=mongoose.Schema(
    {
       Class_name:{type:"String",require:true,default:null},
       Class_type:{type:"String",require:true,default:null},
       Class_hrs:{type:"String",require:true,default:"1"},
       Course_id:{type:"String",unique:true},
       Created_date:{type:"Date",required:true,default:Date.now},
       Modified_date:{type:"Date",require:true,default:Date.now},
       isActive:{type:"Boolean",required:true,default:true}
    }
)
const classModule=mongoose.model(moduleName,classSchema);
module.exports=classModule;
