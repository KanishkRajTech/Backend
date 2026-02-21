const Todo = require("../models/todo");

exports.createTodo = async(req,res)=>{
    try{
        const {title,description} = req.body;

        const response = await Todo.create({title,description});

        res.status(201).json({
            success:true,
            data:response,
            message:"Todo created successfully"
        });

    }catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:error.message
        });
        
    }
}