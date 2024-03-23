const mongoose=require("mongoose")

const studetails=new mongoose.Schema({
"rollno":String,
"name":String,
"city":String,
"fess":String


})

module.exports=mongoose.model("studetails",studetails)



