// Write a JavaScript program to display the current day and time.
var today = function Date() {
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (date + time);
}
Date();


// Write a JavaScript program to convert a number to a string.
const number = function (arg1) {
  return arg1.toString();
}
number (433);


// Write a JavaScript program to convert a string to the number.
const toNumber = function (string) {
  return parseInt(string, 10)
}
  ToNumber ('43')


// Write a JavaScript program that takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, Nan or String.
const dataTypeID = function(data) {
  return console.log(typeof data);
}
dataTypeID('hello there!');


// Write a JavaScript program that adds 2 numbers together.
const sumOf = function(x, y) {
  return (x + y);
}
sumOf(8, 4);


// Write a JavaScript program that runs only when 2 things are true.
const chores = function(payBills, cleanApt) {
  if (payBills && cleanApt) {
    return ('All chores are done!')
  } else return ('Chores are not done!')
}
chores(true, true);


// Write a JavaScript program that runs when 1 of 2 things are true.
const chores = function (payBills, cleanApt) {
  if (payBills || cleanApt) {
    return ('Chores are partially, if not fully done!!')
  } else return ('Chores are not done!')
}
chores(true, true);


// Write a JavaScript program that runs when both things are not true.
const chores = function (payBills, cleanApt) {
  if ((payBills == false) && (cleanApt == false)) {
    return ('Nothing is done! Great work!')
  } else return ('You are too productive!')
}
chores(false, false);
