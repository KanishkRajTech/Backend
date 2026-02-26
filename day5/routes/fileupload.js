const express = require("express")
const route = express.Router();


const { localFileUpload,imageUpload} = require("../controllers/fileControllers")

route.post("/localFileUpload",localFileUpload);
// route.post("/imageReducerUpload",imageReducerUpload);
// route.post("/videoUpload",videoUpload);
route.post("/imageUpload",imageUpload);


module.exports = route;