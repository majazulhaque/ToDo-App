const express = require("express");
const path = require("path");
const port = 8000;
const app = express();

const db = require("./config/mongoose");
const ToDo = require("./models/todo_list_model");

app.get("/", require("./routes"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded()); // middleware to analyse the req and convert into req.body.
app.use(express.static("assets"));

// Method to add the list in the database
app.post("/create-list", function (req, res) {
  ToDo.create(
    {
      description: req.body.description,
      category: req.body.category,
      dueDate: req.body.dueDate,
    },
    function (err, newList) {
      if (err) {
        console.log(newList);
        console.log("error while creating a contact!");
        return;
      }
      console.log("***********", newList);
      return res.redirect("back");
    }
  );
});



app.post("/delete-list", function (req, res) {
  console.log("hey");
  let sp = req.query._id; // getting the id from ui
  newsp = sp.split(',');
  
  for (let i = 0; i < newsp.length; i++) {
    // looping over newsp  to delete all the checked value
    ToDo.findByIdAndDelete(newsp[i], function (err) {
      if (err) {
        console.log("err in deleting an obj from database");
        return;
      }
    });
  }
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is set up at port: ${port}`);
});
