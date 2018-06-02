/* function goBack() {
  window.history.go(-1);
}

window.setTimeout(updateWrapper, 5000);

function updateWrapper() {
  document.getElementById("wrapper").innerHTML = "Wow it's works";
} */

/* var output = document.getElementById("wrapper");
output.innerHTML = navigator.userAgent; */

/* console.log(document.myForm.children);
document.myForm.children[0].value = 2; */

/*
function changeWrapper() {
  document.getElementById("wrapper").innerHTML = document.myForm.url.value;
}

function addNumber() {
  var firstNumber = Math.floor(document.getElementById("firstNumber").value);
  var secondNumber = Math.floor(document.getElementById("secondNumber").value);
  document.getElementById("result").value = firstNumber + secondNumber;
  //document.getElementById("wrapper").innerHTML = firstNumber + secondNumber;
}

function minusNumber() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  document.getElementById("result").value = secondNumber - firstNumber;
}

*/

/* var output = document.getElementById("wrapper");
var image = "http://via.placeholder.com/350x150/000?text=image 1";

document.getElementById("firstNumber").onchange = changeWrapper;

function changeWrapper() {
  document.getElementById("wrapper").innerHTML = "Worked";
}

window.onload = function(event) {
  myFun("window");
};

function myFun(msg) {
  document.getElementById("wrapper").innerHTML = msg;
}

function changeImage(img) {
  output.innerHTML = img.src;
  img.src = "http://via.placeholder.com/350x150/fff?text=image 2";
}

function backImage(img) {
    img.src = image;
} */

/* function sendInfo() {
  var firstName = event.target.parentElement.e1.value;
  var lastName = event.target.parentElement.e2.value;
  var fullName = firstName + " " + lastName;
  message(fullName);
}

function message(msg) {
  document.getElementById("wrapper").innerHTML = msg;
} */

/* var img = "http://via.placeholder.com/350x150/000?text=image 1";
var iSize = "350x150";
var iColor = "000";
var iText = "text";
function changeImageU() {
  console.dir(event.target.parentElement.myImage.src);
  console.dir(event.target.value);
  console.dir(event.target.type);
  if (event.target.type == "select-one") {
    iSize = event.target.value;
  } else if (event.target.type == "text") {
    iText = event.target.value;
  } else if (event.target.type == "color") {
    var output = event.target.value;
    iColor = output.replace("#", "");
  }
  var imageSrc =
    "http://via.placeholder.com/" + iSize + "/" + iColor + "?text=" + iText;
  event.target.parentElement.myImage.src = imageSrc;
} */

/*
image carousel
*/
/* var imagePlace = 0;
var imageName = ["1", "2", "3", "4", "5"];
var imageColor = ["CD5C5C", "F08080", "FA8072", "E9967A", "FFA07A"];

function startImage() {
  setInterval(swapImage, 1000);
}

function swapImage() {
  imagePlace++;
  if (imagePlace >= imageName.length) {
    imagePlace = 0;
  }
  var myImage = document.getElementById("myImage");
  myImage.src =
    "http://via.placeholder.com/350x150/" +
    imageColor[imagePlace] +
    "?text=" +
    imageName[imagePlace];
} */

/* function checkName() {
  message(event.target.value);
} */

/** form validation */
/* function valForm() {
  var firstName = event.target.children.firstName;
  var secondName = event.target.children.secondName;
  var age = event.target.children.age;
  //console.log(secondName.value);
  if (firstName.value == "" || secondName.value == "" || age.value == "") {
    message("Input field can not be empty");
    return false;
  } else {
    return true;
  }
} */

//drag and drop
var holderItem;
function dragStart() {
  message("Drag Started");
  holderItem = event.target;
}

function nOver() {
  event.preventDefault();
}

function dDrop() {
  event.preventDefault();
  if (event.target.className == "box") {
    event.target.appendChild(holderItem);
  }
}

function message(msg) {
  document.getElementById("wrapper").innerHTML = msg;
}
