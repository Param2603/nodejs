const express = require("express")

const dashboardRouter = express.Router()

dashboardRouter.get("/", (req,res) => {
    res.render("login")
})

dashboardRouter.get("/dashboard", (req,res) => {
    return res.render("dashboard")
})

dashboardRouter.get("/singup", (req,res) => {
    return res.render("singup")
})

dashboardRouter.post("/add", (req,res) => {
    console.log(req.body)
})


module.exports = {dashboardRouter}