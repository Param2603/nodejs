const express = require("express");
const { moviemodel } = require("../models/moviemodel");
const fs = require("fs");
const path = require("path");
const { upload } = require("../middleware/multer");

const movieRouter = express();

// 📍 Home route
movieRouter.get("/", async (req, res) => {
  try {
    let movieData = await moviemodel.find({});
    return res.render("home", { movieData });
  } catch (err) {
    console.log(err);
  }
});

// 📍 Add movie
movieRouter.post("/add", upload, async (req, res) => {
  try {
    if (req.file) {
      // ✅ Add slash between /uploads and filename
      req.body.image = "/uploads/" + req.file.filename;
    }
    if (req.body.rating) req.body.rating = parseFloat(req.body.rating);

    await moviemodel.create(req.body);
    console.log(req.body);
    console.log("Movie added successfully");
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
});

// 📍 Delete movie
movieRouter.get("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deleteData = await moviemodel.findById(id);
    if (!deleteData) {
      console.log("Movie not found");
      return res.redirect("/");
    }

    // ✅ Safely delete file (check before unlink)
    if (deleteData.image) {
      const imagePath = path.join(__dirname, "..", deleteData.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        console.log("Deleted image:", imagePath);
      } else {
        console.log("Image not found, skipping delete:", imagePath);
      }
    }

    await moviemodel.findByIdAndDelete(id);
    console.log("Movie deleted successfully");
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
});

// 📍 Edit page
movieRouter.get("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let editData = await moviemodel.findById(id);
    return res.render("update", { editData });
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
});

// 📍 Update movie
movieRouter.post("/update", upload, async (req, res) => {
  try {
    const movie = await moviemodel.findById(req.body.id);
    if (!movie) {
      console.log("Movie not found");
      return res.redirect("/");
    }

    // ✅ If new image uploaded
    if (req.file) {
      const oldImagePath = path.join(__dirname, "..", movie.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
        console.log("Old image deleted:", oldImagePath);
      } else {
        console.log("Old image not found, skipping delete:", oldImagePath);
      }

      req.body.image = "/uploads/" + req.file.filename;
    } else {
      req.body.image = movie.image; // keep old image
    }

    if (req.body.rating) req.body.rating = parseFloat(req.body.rating);

    await moviemodel.findByIdAndUpdate(req.body.id, req.body);
    console.log("Movie updated successfully");
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
});

module.exports = { movieRouter };