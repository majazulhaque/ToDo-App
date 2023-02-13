let designcl = ["Personal", "Work", "School", "Cleaning", "Other"]; //creating class for implementing design to different category
$(document).ready(function () {
  let categorys = document.getElementsByClassName("ctg"); // getting all the class name category
  for (let i = 0; i < categorys.length; i++) {
    // looping in the  categorys to find the which categry class belongs and implement according sesign check home.css to get the color of eact section
    if (categorys[i].innerHTML.trim() == "Personal") {
      categorys[i].classList.add("yellow");
    } else if (categorys[i].innerHTML.trim() == "Work") {
      categorys[i].classList.add("red");
    } else if (categorys[i].innerHTML.trim() == "School") {
      categorys[i].classList.add("green");
    } else if (categorys[i].innerHTML.trim() == "Cleaning") {
      categorys[i].classList.add("orange");
    } else {
      categorys[i].classList.add("purple");
    }
  }
});

function checkedOrNot() {
  let cb = document.querySelectorAll(".delecheck"); // getting all the check-box class
  let descdisp = document.querySelectorAll(".dispdsc"); // gettong all the class where descripting of TODO is defined
  let ddsp = document.querySelectorAll(".dueDt"); // getting all the class for dueDate
  for (let i = 0; i < descdisp.length; i++) {
    let dueDate = ddsp[i].innerHTML;
    // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
    if (cb[i].checked == true) {
      // document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through'
      // document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'line-through'
      descdisp[i].style.textDecoration = "line-through";
      ddsp[i].style.textDecoration = "line-through";
    } else if (cb[i].checked == false) {
      // document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none'
      // document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'none'
      descdisp[i].style.textDecoration = "none";
      ddsp[i].style.textDecoration = "none";
    }
  }
}
document.getElementById("delete-task").addEventListener("click", function () {
  let checedvaluew = document.querySelectorAll(".delecheck:checked"); // getting only checked vale
  let arrcheck = []; // creating the lsit of checked array
  for (let i of checedvaluew) {
    let gg = "";
    gg = i.getAttribute("uid"); // getting uniue id from and pushing into array
    console.log(gg);
    arrcheck.push(gg);
  }
  if (arrcheck.length === 0) {
    // checking if array is null the
    console.log("no item is checked");
    swal("No item is checked!!", "please select item to remove!", "error"); // using show alert to show if there is no items in the array
    return;
  }
  //here we are making delete request with the help of Ajax request
  $.ajax({
    type: "post",
    url: "/delete-list/?_id=" + arrcheck,
    success: function () {
      // on ajax sunnces i.e when data is delete
      swal("Item is deleted ", "click ok to go back Home ", "success") // using sweet alert to show the data is delete
        .then((redir) => {
          window.location = "/";
        });
    },
    error: function (err) {
      console.log(err);
    },
  });
});
