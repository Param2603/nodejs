const { taskModel } = require("../models/Task");

// LIST TASKS
const listTasks = async (req, res) => {
    const tasks =
        req.user.role === "admin"
            ? await taskModel.find().populate("user")
            : await taskModel.find({ user: req.user.id });

    res.render("taskList", { tasks, user: req.user });
};

// TASK FORM
const renderTaskForm = (req, res) => {
    res.render("taskForm", { user: req.user });
};

// ADD TASK
const addTask = async (req, res) => {
    await taskModel.create({
        title: req.body.title,
        description: req.body.description,
        user: req.user.id
    });

    res.redirect("/tasks");
};

// DELETE TASK
const deleteTask = async (req, res) => {
    await taskModel.findByIdAndDelete(req.params.id);
    res.redirect("/tasks");
};

module.exports = { listTasks, addTask, deleteTask, renderTaskForm };
