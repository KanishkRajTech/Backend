const express = require("express");
const router = express.Router();


// import the controller
const {createTodo} = require("../controller/createTodo");
const {getTodo,getTodoById} = require("../controller/getTodo");
const {deleteTodo} = require("../controller/deleteTodo");



// define api routes
router.post("/create",createTodo);
router.get("/get",getTodo);
router.get("/get/:id",getTodoById);
router.delete("/delete/:id",deleteTodo);
module.exports = router;    