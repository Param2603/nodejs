const mangoose = require("mangoose");

const userSchema = new mangoose.schema({
    userName: {
        type: String,
        require :true
    },
    email: {
        type: String,
        require :true
    },
})

const userModel = mangoose.model("user", userSchema);
module.exports = { userModel };