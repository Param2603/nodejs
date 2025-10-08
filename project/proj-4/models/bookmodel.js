const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    Image: {
        type: String,
        require: true
    },
    Author: {
        type: String,
        require: true
    },
    Price: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
})

const bookModel = mongoose.model("book", bookSchema)

module.exports = { bookModel }