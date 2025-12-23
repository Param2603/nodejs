const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { dbconnect } = require("./config/db");

const authRouter = require("./routes/authRoutes");
const taskRouter = require("./routes/taskRoutes");

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' https:; font-src https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' https: 'unsafe-inline';"
  );
  next();
});

app.use("/", authRouter);
app.use("/tasks", taskRouter);

app.listen(process.env.PORT, (err) => {
  if(err){
    console.log("server is not running")
  }
  dbconnect()
  console.log("✅ Server running on port", process.env.PORT );
});
