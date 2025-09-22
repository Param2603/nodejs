const express = require("express")
const app = express()

const PORT = 8080

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

let array = []

app.get("/", (req, res) => {
  return res.render("home", { array })
});

app.post("/add-data", (req, res) => {
  console.log(req.body)
  array.push(req.body)
  res.redirect("/")
});

app.get("/delete/:id", (req, res) => {
//   console.log(req.params.id)
  array = array.filter((element, index) => index != req.params.id)
  res.redirect("/")
});

app.get("/edit/:id", (req, res) => {
  let updateData = array[req.params.id]
  return res.render("update", { updateData, updateId: req.params.id })
});

app.post("/update-data", (req, res) => {
  let { updateId, name, password, email, gender } = req.body
  array[updateId] = { name, password, email, gender }
  return res.redirect("/")
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running")
    return;
  }
  console.log("server is running", PORT)
});