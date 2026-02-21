const Todo = require("../models/todo");

exports.updateTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        const {title,description} = req.body;
        const response = await Todo.findByIdAndUpdate(
            id,
            {title,description,updatedAt:Date.now()},
        );
        if(!response){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Todo updated successfully"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}