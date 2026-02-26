//create app
const express = require("express");
const app = express()

//find port
require("dotenv").config()
const PORT = process.env.PORT ||8000;

//middleware 
app.use(express.json());
const fileUpload = require("express-fileupload")
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// db connect
const db = require("./config/db")
db();

// cloud connect
const cloud = require("./config/cloudinary")
cloud.cloudinaryConnect()

// api routes
const Upload = require("./routes/fileupload")
// mount the upload router; ensure leading slash so path is normalized correctly
app.use('/api/v1/upload', Upload);

// active serverd
app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})