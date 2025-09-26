const mangoose = require("mangoose")

const dbconnect = async () => {
  await mangoose.connect("mongodb://127.0.0.1/paramProj");
  console.log("database is connected");
};

module.exports ={dbconnect}