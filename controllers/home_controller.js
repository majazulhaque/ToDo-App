const ToDo = require("../models/todo_list_model");
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
  // return res.render('home',{
  //     title: "ToDo App",
  //     todo_list: ToDo,
  // });
};


module.exports.deleteTodo = function (req, res) {
  console.log("help");
  sp = req.query.id; // getting the id from ui
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
