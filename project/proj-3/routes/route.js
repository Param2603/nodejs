const express = require("express")

const router = express.Router()

router.get("/", (req,res) => {
    return res.render("home")
})

router.get("/about", (req,res) => {
    return res.render("about")
})

router.get("/features", (req,res) => {
    return res.render("features")
})

router.get("/contact", (req,res) => {
    return res.render("contact")
})

module.exports = {router}