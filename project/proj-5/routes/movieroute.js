const express = require("express")
const { moviemodel } = require("../models/moviemodel")
const fs = require("fs")
const path = require("path")
const { upload } = require("../middleware/multer")
const movieRouter = express()

movieRouter.get("/", async (req, res) => {
    try {
        let movieData = await moviemodel.find({})
        return res.render("home", { movieData })
    } catch (err) {
        console.log(err)
    }
})

movieRouter.post("/add", upload, async (req, res) => {
    try {
        if (req.file) {
            req.body.image = "/uploads" + "/" + req.file.filename
        }
        // console.log(req.file)
        await moviemodel.create(req.body)
        console.log(req.body)
        console.log("Movie added successfully")
        return res.redirect("/")
    } 
    catch (err) {
        console.log(err)
    }
})

movieRouter.get("/delete/:id", async (req, res) => {
    const id = req.params.id

    const deleteData = await moviemodel.findById(id)
    console.log(deleteData)
    try {
        console.log(deleteData.image)
        fs.unlinkSync(path.join(__dirname, "..", deleteData.image))
        await moviemodel.findByIdAndDelete(id)
        console.log("User Deleted Successfully")
        return res.redirect("/")
    } 
    catch (err) {
        console.log(err)
        return res.redirect("/")
    }
})

movieRouter.get("/edit/:id", async (req, res) => {
    try {
        const id = req.params.id

        let editData = await moviemodel.findById(id)
        console.log(editData)
        return res.render("updateMovie", { editData })
    } 
    catch (err) {
        console.log(err)
        return res.redirect("/")
    }
})

movieRouter.post("/update", upload, async (req, res) => {
    try {
        let response = await moviemodel.findById(req.body.id)
  
        if (req.file) {
            fs.unlinkSync(path.join(__dirname, "..", response.image))
            req.body.image = "/uploads" + "/" + req.file.filename
        }
        await moviemodel.findByIdAndUpdate(req.body.id, req.body)
        console.log("Movie Updated Successfully")
        return res.redirect("/")
    } 
    catch (err) {
        console.log(err)
        return res.redirect("/")
    }
})

module.exports = {movieRouter}