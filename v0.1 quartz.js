var geti = function (id) {
  var a = document.getElementById(id);
  return a;
}
var get = function (className) {
  var a = document.getElementsByClassName(className);
  return a;
}
var getn = function (name) {
  var a = document.getElementsByName(name);
  return a;
}
var gett = function (tag) {
  var a = document.getElementsByTagName(tag);
  return a;
}

var activate = function (eventName,callFunction,name1) {
  var clickerButton = document.getElementById(name1);
  clickerButton.addEventListener(eventName,callFunction);
};

var pi = function () {
  return Math.PI;
}

var cats = function (array, joinPoint) {
  var b = array;
  b = array.toString();
  return b;
}
var csta = function (string, splitPoint) {
  var b = string;
  return b.split(splitPoint);
}
var join = function (joinArray, addArray) {
  var b = addArray;
  b = addArray.concat(joinArray);
  return b;
}
