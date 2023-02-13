const express = require("express");
const path = require("path");
const port = 8000;
const app = express();

const db = require("./config/mongoose");
const ToDo = require("./models/todo_list_model");

app.get("/", require("./routes"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());                     // middleware to analyse the req and convert into req.body.
app.use(express.static("assets"));

app.post('/create-list', require('./routes'));     // To route the create-list request
app.post('/delete-list',require('./routes'));      // To route the delete-list request


// Run the server on port 8000
app.listen(port, function (err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is set up at port: ${port}`);
});
