// Server Instantiate
const express = require('express');
const app = express();

// used to parese req.body in express -> PUT or POST
const bodyParser = require('body-parser');

// specifally pase JSON data & add it to the request.Body object
app.use(bodyParser.json());

//active the server on 300 port
app.listen(3000, () =>{
    console.log("server started at port no. 3000")
});

// Get Routes
app.get('/',(req,res)=>{
    res.send("hello jee, kaise ho saare")
})

// Post Routes
app.post('/api/cars', (req,res)=>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submit successfully.")
})




const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDatabase", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });