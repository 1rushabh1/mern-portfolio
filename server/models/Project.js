const mongoose=require('mongoose');
const S=new mongoose.Schema({title:String,description:String,stack:[String],repoUrl:String,liveUrl:String,image:String,createdAt:{type:Date,default:Date.now}});
module.exports=mongoose.model('Project',S);