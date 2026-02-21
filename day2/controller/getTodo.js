const Todo = require("../models/todo");

exports.getTodo = async(req,res)=>{
    try{
         const {title,description} = req.body;
        const response = await Todo.find({title,description});
        res.status(200).json({
            success:true,
            data:response,
            message:"Todo created successfully"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


exports.getTodoById = async(req,res)=>{
    try{
        const {id} = req.params;
        const response = await Todo.findById(id);
        if(!response){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Todo fetched successfully"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}