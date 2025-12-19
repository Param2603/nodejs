const Task = require("../models/Task.js");

const listTasks = async (req, res) => {
    const tasks =
        req.user.role === "admin"
            ? await Task.find().populate("user") // populate means add one data into another data (get data)
            : await Task.find({ user: req.user.id })

    res.render("taskList", { tasks, user: req.user })
}

const addTask = async (req, res) => {
    await Task.create({
        title: req.body.title,
        description: req.body.description,
        user: req.user.id
    })
    res.redirect("/tasks")
}

const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.redirect("/tasks")
};

module.exports = { listTasks, addTask, deleteTask }