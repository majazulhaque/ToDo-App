const ToDo = require("../models/todo_list_model");

// Method to render the data from database into the view.
module.exports.home = function (req, res) {
  ToDo.find({}, function (err, todos) {
    if (err) {
      console.log("Error in fetching data from db");
      return;
    }
    return res.render("home", {
      title: "ToDo App",
      todo_list: todos,
    });
  });
};


// Method to add the todo list in the database***************
module.exports.create = function (req, res) {
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
        // console.log("***********", newList);
        return res.redirect("back");
      }
    );
  };

//Method to delete the Todo list from database*************
module.exports.deleteTodo = function (req, res) {
  sp = req.query._id; // getting the id from url
  newsp = sp.split(",");
  for (let i = 0; i < newsp.length; i++) {
    // looping over newsp  to delete all the checked value
    ToDo.findByIdAndDelete(newsp[i], function (err) {
      if (err) {
        console.log("err");
        return;
      }
    });
  }
  return res.redirect("/");
};
