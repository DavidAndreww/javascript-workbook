'use strict'

// creates an array to store JSON file
let arrayOfUsers;

// action to take when window loads - call the getUsers() function
window.onload = () => {
  getUsers()
}

// defines a function that fetches API, stores as a JSON file, and then gives its value to arrayOfUsers
const getUsers = () => {
  fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(user1 => arrayOfUsers = user1)
}

// generates random number to display user
let random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// add click function to displayButton to display users
document.getElementById("displayButton").addEventListener("click", function () {
  displayUsers()
})

// function that displays random user on click
const displayUsers = () => {
  // random number
  let randomIndex = random(0, 100)
  // define the divs that holds the content
  const backGround = document.getElementById('background')
  // define the <p>, <img>, <button> and textNode
  const nameDiv = document.createElement('div')
  nameDiv.setAttribute('class', 'userInfo')
  const name_Para = document.createElement('h3')
  const imgElem = document.createElement('img')
  const buttonElem = document.createElement('button')
  let nameTextNode = document.createTextNode(`${arrayOfUsers.results[randomIndex].name.first} ${arrayOfUsers.results[randomIndex].name.last}`)
  // textNode is put inside of the <p>, and <img> src attribute is defined
  name_Para.appendChild(nameTextNode)
  imgElem.src = arrayOfUsers.results[randomIndex].picture.large;
  // appends name, image, and button to the userInfo div, which is appended to the backGround display
  buttonElem.innerHTML = 'Expand'
  backGround.append(nameDiv)
  nameDiv.append(name_Para)
  nameDiv.append(imgElem)
  nameDiv.append(buttonElem)
  buttonElem.addEventListener("click", function () {
    expandInfo(randomIndex, nameDiv)
  })
}


const expandInfo = (randomIndex, nameDiv) => {
  // define the divs that holds the content
  const backGround = document.getElementById('background')
  // create divs for textNodes
  let expandedLocation = document.createElement('p')
  let expandedEmail = document.createElement('p')
  let expandedAge = document.createElement('p')
  let expandedPhone = document.createElement('p')
  // create textNodes
  let expandedLocationNode = document.createTextNode(`Location: ${arrayOfUsers.results[randomIndex].location.city}`)
  let expandedEmailNode = document.createTextNode(`Email: ${arrayOfUsers.results[randomIndex].email}`)
  let expandedAgeNode = document.createTextNode(`Age: ${arrayOfUsers.results[randomIndex].dob.age}`)
  let expandedPhoneNode = document.createTextNode(`Phone: ${arrayOfUsers.results[randomIndex].cell}`)
  // puts textNode inside of the <p>
  expandedLocation.appendChild(expandedLocationNode)
  expandedEmail.appendChild(expandedEmailNode)
  expandedAge.appendChild(expandedAgeNode)
  expandedPhone.appendChild(expandedPhoneNode)
  // puts <p> inside of expandInfo div
  nameDiv.append(expandedAge)
  nameDiv.append(expandedLocation)
  nameDiv.append(expandedPhone)
  nameDiv.append(expandedEmail)
  backGround.append(nameDiv)
}

// ------------------WORKING CODE ABOVE-----------------//






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
