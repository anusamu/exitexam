
const mongoose=require ('mongoose');
const todoSchema=new mongoose.Schema({
  todoDescription:String,
  status:String
})
const  TodoData=mongoose.model('todo',todoSchema);
module.exports=TodoData;