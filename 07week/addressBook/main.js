'use strict'

// creates an array to store JSON file
let arrayOfUsers;

// action to take when window loads - call the getUsers() function
window.onload = function () {
  getUsers()
  // displayUsers() // why doesn't this load userlist without butto click?
}

// defines a function that fetches API, stores as a JSON file, and then gives its value to arrayOfUsers
const getUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(user1 => arrayOfUsers = user1)
}

// function that gets users
const displayUsers = () => {
  // define the divs that holds the content
  // const parentDiv = document.getElementById('personInfo');
  const nameDiv = document.getElementById('name');
  const photoDiv = document.getElementById('photo');
  const buttonDiv = document.getElementById('button');
  // for each index (user) in the array, create <p>, <img>, <button> and textNode
  for (let i = 0; i < arrayOfUsers.results.length; i++) {
    let name_Para = document.createElement('p')
    let imgElem = document.createElement('img')
    let buttonElem = document.createElement('button')
    const nameTextNode = document.createTextNode(`${arrayOfUsers.results[i].name.first} ${arrayOfUsers.results[i].name.last}`)
    // textNode is put inside of the <p>, and <img> src attribute is defined
    name_Para.appendChild(nameTextNode)
    imgElem.src = arrayOfUsers.results[i].picture.large;
    // the <p>, <img>, <button> and textNode are put inside the div
    nameDiv.append(name_Para)
    photoDiv.append(imgElem)
    buttonDiv.append(buttonElem)

    // Will this work?
    // buttonElem.addEventListener("click", expandInfo())

    // Or maybe this will work
    document.getElementsByTagName("button").setAttribute("class", "expandClass")
    document.getElementsByClassName("expandClass").addEventListener("click", expandInfo())
  }
}

const expandInfo = () => {
  const expandedDiv = document.getElementById('expandInfo');
  for (let j = 0; j < arrayOfUsers.results.length; j++){
    let expandedInfo = document.createElement('p')
    let expandedTextNode = document.createTextNode(`${arrayOfUsers.results[j].location.city}, ${arrayOfUsers.results[j].location.state} <br> ${arrayOfUsers.results[j].email} <br> ${arrayOfUsers.results[j].dob}`)
    // puts textNode inside of the <p>
    expandedInfo.appendChild(expandedTextNode)
    // puts <p> inside of expandInfo div
    expandedDiv.append(expandedInfo)
  }
}










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


























