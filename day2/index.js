const express = require("express");
const app = express();


// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json body
app.use(express.json());

// import routes
const todoRoutes = require("./routes/todo");

// mount the routes
app.use("/api/v1",todoRoutes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});

//connect to database
const dbConnect = require("./config/database");
dbConnect();


// default route
app.get("/",(req,res)=>{
    res.send(`<h1>Todo App</h1>`);
});