const express = require("express");
const { listTasks, addTask, deleteTask, renderTaskForm } = require("../controllers/taskController");
const { isAuth } = require("../middleware/authmiddleware");

const router = express.Router();

router.get("/", isAuth, listTasks);
router.get("/create", isAuth, renderTaskForm);
router.post("/add", isAuth, addTask);
router.get("/delete/:id", isAuth, deleteTask);

module.exports = router;
