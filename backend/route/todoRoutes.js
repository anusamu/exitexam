const express=require ('express');
const router=express.Router();
router.use(express.json())
router.use(express.urlencoded({extended:true}));
const TodoModel=require('../models/todoModel')



router.get('/',async(req,res)=>{
    try {
        const todo=await TodoModel.find()
        res.status(200).send(todo);
    } catch (error) {
        res.status(404).send('todo is not found');
        
    }
});
router.post('/add', async(req,res)=>{
    try {
        const id=req.body;
        const newTodo=new TodoModel(id);
        const saved=await newTodo.save();
        res.status(200).send(' successfully');
    } catch (error) {
         console.error(error);
        res.status(404).send('Error adding');
    }
});


router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await TodoModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send(' deleted successfully');
    } catch (error) {
        res.status(404).send('Error deleting ');
    }
});

module.exports = router;