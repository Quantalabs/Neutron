var geti = function (id) {
  var a = document.getElementById(id);
  return a;
}
var get = function (className) {
  var a = document.getElementsByClassName(className);
  return a;
}
var getn = function (name) {
  var a = document.getElementByName(name);
  return a;
}
var gett = function (tag) {
  var a = document.getElementByTagName(tag);
  return a;
}

var activate = function (eventName,callFunction,name1) {
  var clickerButton = document.getElementById(name1);
  clickerButton.addEventListener(eventName,callFunction);
};
