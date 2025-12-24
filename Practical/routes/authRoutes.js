const express = require("express")
const { register, login, logout } = require("../controllers/authController")

const authRouter = express.Router()

authRouter.get("/", (req, res) => {
    res.redirect("/login")
})

authRouter.get("/register", (req, res) => res.render("register"))
authRouter.post("/register", register)

authRouter.get("/login", (req, res) => res.render("login"))
authRouter.post("/login", login)

authRouter.get("/logout", logout)

module.exports = authRouter
