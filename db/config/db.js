const mongoose = require("mongoose");

const dbconnect = async () => {
  await mongoose.connect("mongodb://127.0.0.1/paramProj");
  console.log("database is connected");
};

module.exports ={dbconnect}