const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/User.js")

const register = async (req, res) => {
    const { username, password, role } = req.body
    const hash = await bcrypt.hash(password, 10)
    await User.create({ username, password: hash, role })
    res.redirect("/login")
}

const login = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user){
        return res.send("User not found")
    } 

    const match = await bcrypt.compare(password, user.password)
    if (!match){
        return res.send("Wrong password")
    } 

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token)
    res.redirect("/tasks")
}

const logout = (req, res) => {
    res.clearCookie("token")
    res.redirect("/login")
}

module.exports = { register, login, logout }