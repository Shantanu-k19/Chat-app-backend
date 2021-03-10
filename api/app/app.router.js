const {createTaskControl,readTaskControl,deleteTaskControl,updateTaskControl}=require('../app/app.controller');
const router = require("express").Router();

router.post("/addTask", createTaskControl);
router.get("/readTasks",readTaskControl);
router.delete("/deleteTask",deleteTaskControl);
router.patch("/updateTask",updateTaskControl)

module.exports=router;