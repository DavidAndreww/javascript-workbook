'use strict'

// // creates an array to store JSON file
// let arrayOfUsers;

// // action to take when window loads - call the getUsers() function
// window.onload = function () {
//   getUsers()
// }

// // defines a function that fetches API, stores as a JSON file, and then gives its value to arrayOfUsers
// const getUsers = () => {
//   fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(user1 => arrayOfUsers = user1)
// }




// ---------------------- Promises?!?!-----------------------------
// let userObj1;
// let userObj2;
// let userObj3;
// let userObj4;


// window.onload = () => {
//   getUsers()
// }

// const getUsers = (url) => {
//   return fetch(url)
//     .then(res => res.json())
// }

// getUsers('https://randomuser.me/api/')
//   .then(userData1 => userObj1 = userData1)
// getUsers('https://randomuser.me/api/')
//   .then(userData2 => UserObj2 = userData2)
// getUsers('https://randomuser.me/api/')
//   .then(userData3 => UserObj3 = userData3)
// getUsers('https://randomuser.me/api/')
//   .then(userData4 => UserObj4 = userData4)





















// May need to use this syntax for proper alignment in DOM?

// const displayUsers = () => {
//   const allUsers = document.getElementById('address-book')
//   const userImage = document.getElementById('div')
//   const userButton = document.getElementById('button')
//   for (let i = 0; i < arrayOfUsers.results.length; i++){
//     const userList = document.createElement('div')
//     const userImg = document.createElement('img')
//     const userBtn = document.createElement('button')
//     const userField = document.createTextNode(`Name:${arrayOfUsers.results[i].name.first} ${arrayOfUsers.results[i].name.last}`)
//     userImg.src = arrayOfUsers.results[i].picture.large;
//     userImage.append(userImg)
//     userList.appendChild(userField) 
//     allUsers.append(userList) 
//     userButton.append(userBtn)
//    }
// }


// -------------------Current Working Code------------------------
const displayUsers = () => {
  // define the div that holds the content
  const parentDiv = document.getElementById('personInfo');


  // for each index (user) in the array, create <p>, <img>, <button> and textNode
  for (let i = 0; i < arrayOfUsers.results.length; i++) {
    const name_Para = document.createElement('p')
    const imgElem = document.createElement('img')
    const buttonElem = document.createElement('button')
    const nameTextNode = document.createTextNode(`${arrayOfUsers.results[i].name.first} ${arrayOfUsers.results[i].name.last}`)

    // textNode is put inside of the <p>, and <img> src attribute is defined
    name_Para.appendChild(nameTextNode)
    imgElem.src = arrayOfUsers.results[i].picture.large;

    // the <p>, <img>, <button> and textNode are put inside the dive
    parentDiv.append(imgElem)
    parentDiv.append(name_Para)
    parentDiv.append(buttonElem)
  }
}
