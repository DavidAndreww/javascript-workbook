// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php


//1. Write a JavaScript program to list the properties of a JavaScript object.
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

//  ------------------------------------------------HELP ME
// let decision = function isObject(obj) {
//   let type = typeof obj;
//   return type === 'object';
// }

// function getKeys(obj) {
//   let keys = [];
//   if (decision(student)) {
//     for (var property in obj) {
//       keys.push(obj.key);
//     };
//     console.log(keys);
//   }
// }
// getKeys();


//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// var string = 'This is not an object';

// let isObject = function isObject(obj) {
//   let type = typeof obj;
//   return type === 'object';
// }

// function getRemoved(object) {
//   if (isObject(student) === true){
//     delete object.rollno;
//     console.log(object);
//   }
// }
// getRemoved(student);


//3. Write a JavaScript program to get the length of an JavaScript object. Go to the editor

// const student = {
//   name: 'David',
//   age: 32,
//   year: 2,
//   gpa: 3.5,
// }

// let length = (Myobj) => {
//   var osize = 0;
//   for (key in Myobj) {
//     if (Myobj.hasOwnProperty(key)) osize++;
//   }
//   return osize;
// }

// let structured = length(student);
// console.log(`The length of this object is ${structured}`);


//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

// var library = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
//   },
//   {
//     author: 'Neil Gaiman',
//     title: 'American Gods',
//     readingStatus: true
//   },
//   {
//     author: 'Chuck Palahniuk',
//     title: 'Fight Club',
//     readingStatus: false
//   }
// ];

// let getStatus = library.map((input) => {
//   console.log(input.author);
//   console.log(input.title);
//   console.log(input.readingStatus);
// });


//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
//Volume of a cylinder : V = πr2h
//where r is the radius and h is the height of the cylinder.

// let getVolume = (r, h) => {
//   console.log('Volume is equal to ' + Math.PI*r*2*h + '.')
// }
// getVolume(2, 5);


//6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]



