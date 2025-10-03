const express = require("express")

const router = express.Router()

router.get("/", (req,res) => {
    return res.render("login")
})

router.get("/singup", (req,res) => {
    return res.render("signup")
})

router.get("/book", (req,res) => {
    return res.render("book")
})

module.exports = { router }