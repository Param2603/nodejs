const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },    
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
    },
    duration: {
        type: String, 
    }
})

const moviemodel = mongoose.model("movie-user",movieSchema)
module.exports = {moviemodel};