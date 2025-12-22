const express = require("express");
const { listTasks, addTask, deleteTask } = require("../controllers/taskController");
const { isAuth } = require("../middleware/authMiddleware");

const taskRouter = express.Router();

taskRouter.get("/", isAuth, listTasks);
taskRouter.post("/", isAuth, addTask);   // ✅ FIX HERE
taskRouter.get("/delete/:id", isAuth, deleteTask);

module.exports = taskRouter;
